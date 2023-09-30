import {Component, OnInit} from '@angular/core';
import {SerialNumberService} from "../../service/serial-number.service";
import {SerialNumber} from "../../model/SerialNumber";
import {SelectionModel} from "@angular/cdk/collections";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  isSerialNumbersLoaded = false;
  displayedColumns: string[] = ['select', 'number', 'ptArt', 'savedAt'];
  selection = new SelectionModel<SerialNumber>(true, []);
  lastAddedSerials: SerialNumber[];
  dataSource = new MatTableDataSource<SerialNumber>;

  constructor(private serialNumberService: SerialNumberService) {
    this.lastAddedSerials = [
      {
        "id": "id", "number": "number", "ptArt": "art", "comment": "comment",
        "customer": "customer", "savedAt": new Date(),
        "createdAt": new Date()
      }
    ];
  }


  ngOnInit(): void {
    this.dataSource.data = this.lastAddedSerials;
    /* this.serialNumberService.getLastAddedSerials()
       .subscribe({
           next: (serials) => {
             console.log("Retrieving last added serial numbers");
             this.lastAddedSerials = serials;
           },
           error(msg) {
             console.log(msg)
           }
         }
       )*/
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: SerialNumber): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.number + 1}`;
  }

}
