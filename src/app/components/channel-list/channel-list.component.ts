import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DynamicDatabase, DynamicFlatNode, TreeService} from '@app/services/tree/tree.service';
import {FlatTreeControl} from '@angular/cdk/tree';

@Component({
  selector: 'app-channel-list-menu',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.scss']
})
export class ChannelListComponent implements OnInit {
  @Output() feed: EventEmitter<any> = new EventEmitter<any>();

  treeControl: FlatTreeControl<DynamicFlatNode>;
  dataSource: TreeService;

  constructor(public database: DynamicDatabase) {
    this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new TreeService(this.treeControl, database);

    this.dataSource.data = database.initialData();
  }

  ngOnInit() {
    this.database.newFeedSubject
      .subscribe((data) => {
        this.database.rootLevelNodes.push(data);
        this.database.createMapOfChannels(this.database.rootLevelNodes);
        this.dataSource.data = this.database.initialData();
        const item = JSON.parse(localStorage.getItem('feedUrls'));
        if (item) {
          item.push(data);
          localStorage.setItem('feedUrls', JSON.stringify(item));
        } else {
          localStorage.setItem('feedUrls', JSON.stringify([data]));
        }
      });
  }

  getLevel = (node: DynamicFlatNode) => node.level;

  isExpandable = (node: DynamicFlatNode) => node.expandable;

  hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;
}
