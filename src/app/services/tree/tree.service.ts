import {CollectionViewer, SelectionChange} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {Injectable} from '@angular/core';
import {BehaviorSubject, merge, Observable, Subject} from 'rxjs';
import {delay, map, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

/** Flat node with expandable and level information */
@Injectable({
  providedIn: 'root'
})
export class DynamicFlatNode {
  constructor(public item: string, public level = 1, public expandable = false,
              public isLoading = false) {
  }
}

/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
@Injectable({
  providedIn: 'root'
})
export class DynamicDatabase {
  currentFeedsSubject: Subject<any> = new Subject<any>();
  currentFeedSubject: Subject<any> = new Subject<any>();
  newFeedSubject: Subject<any> = new Subject<any>();

  dataMap: Map<string, string[]>;
  rootLevelNodes: string[] = [];
  private rssToJsonServiceBaseUrl = 'https://rss2json.com/api.json?rss_url=';

  constructor(private http: HttpClient) {
    this.rootLevelNodes = JSON.parse(localStorage.getItem('feedUrls')) || this.rootLevelNodes;
  }

  createMapOfChannels(rootLevelNodes: string[], channels: any = []) {
    const entries = [];
    for (const item of rootLevelNodes) {
      entries.push([item, channels]);
    }
    this.dataMap = new Map<string, string[]>(entries);
  }

  /** Initial data from database */
  initialData(): DynamicFlatNode[] {
    return this.rootLevelNodes.map(name => new DynamicFlatNode(name, 0, true));
  }

  getChildren(node: string): string[] | undefined {
    return this.dataMap.get(node);
  }

  isExpandable(node: string): boolean {
    return this.dataMap.has(node);
  }

  getFeedContent(url: string): Observable<any> {
    return this.http.get(this.rssToJsonServiceBaseUrl + url);
  }
}

/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */

@Injectable({
  providedIn: 'root'
})
export class TreeService {
  dataChange = new BehaviorSubject<DynamicFlatNode[]>([]);

  constructor(private _treeControl: FlatTreeControl<DynamicFlatNode>,
              private _database: DynamicDatabase) {
  }

  get data(): DynamicFlatNode[] {
    return this.dataChange.value;
  }

  set data(value: DynamicFlatNode[]) {
    this._treeControl.dataNodes = value;
    this.dataChange.next(value);
  }

  connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]> {
    this._treeControl.expansionModel.onChange.subscribe(change => {
      if ((change as SelectionChange<DynamicFlatNode>).added ||
        (change as SelectionChange<DynamicFlatNode>).removed) {
        this.handleTreeControl(change as SelectionChange<DynamicFlatNode>);
      }
    });

    return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));
  }

  /** Handle expand/collapse behaviors */
  handleTreeControl(change: SelectionChange<DynamicFlatNode>) {
    if (change.added) {
      change.added.forEach(node => this.toggleNode(node, true));
    }
    if (change.removed) {
      change.removed.slice().reverse().forEach(node => this.toggleNode(node, false));
    }
  }

  /**
   * Toggle the node, remove from display list
   */
  toggleNode(node: DynamicFlatNode, expand: boolean) {
    node.isLoading = true;
    let children;
    let index = this.data.indexOf(node);

    if (expand) {
      this._database.getFeedContent(node.item)
        .pipe(
          tap((data) => {
            this._database.currentFeedsSubject.next(data.items);
            localStorage.setItem('feeds', JSON.stringify(data.items));
            this._database.createMapOfChannels(this._database.rootLevelNodes, data.items);
            children = this._database.getChildren(node.item);
          }),
          delay(500))
        .subscribe((data) => {
          const nodes = children.map(name =>
            new DynamicFlatNode(name, node.level + 1, this._database.isExpandable(name)));
          this.data.splice(index + 1, 0, ...nodes);

          // notify the change
          this.dataChange.next(this.data);
          node.isLoading = false;
        });
    } else {
      let count = 0;
      for (let i = index + 1; i < this.data.length && this.data[i].level > node.level; i++, count++) {
      }
      this.data.splice(index + 1, count);

      this.dataChange.next(this.data);
      node.isLoading = false;
    }
  }
}
