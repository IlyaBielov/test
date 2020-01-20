import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnChanges {
  @Input() dataList: any;

  data = {};
  type = 'pie';
  options = {
    responsive: true,
  };

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.dataList) {
      this.data = {
        labels: Object.keys(this.dataList),
        datasets: [
          {
            label: 'My First dataset',
            data: Object.values(this.dataList),
            backgroundColor: [
              'rgba(220, 242, 176, 1)',
              'rgba(194, 234, 189, 1)',
              'rgba(192, 186, 188, 1)',
              'rgba(199, 172, 146, 1)',
              'rgba(205, 83, 59, 1)',
              'rgba(37, 137, 189, 1)',
              'rgba(24, 119, 149, 1)',
              'rgba(56, 104, 106, 1)',
              'rgba(163, 180, 162, 1)',
              'rgba(57, 87, 86, 1)',
              'rgba(114, 97, 163, 1)',
              'rgba(205, 198, 174, 1)',
              'rgba(37, 17, 1, 1)',
              'rgba(71, 0, 36, 1)',
              'rgba(91, 24, 101, 1)',
              'rgba(44, 87, 132, 1)',
              'rgba(86, 136, 199, 1)',
              'rgba(166, 125, 184, 1)',
              'rgba(87, 117, 144, 1)',
              'rgba(243, 202, 64, 1)',
              'rgba(242, 165, 65, 1)',
              'rgba(240, 138, 75, 1)',
              'rgba(215, 138, 118, 1)',
              'rgba(186, 209, 205, 1)',
              'rgba(242, 209, 201, 1)',
              'rgba(224, 134, 211, 1)',
            ],
          },
        ],
      };
    }
  }
}
