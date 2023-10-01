import {Component, OnInit} from '@angular/core';
import {SerialNumberService} from "../../service/serial-number.service";
import {SerialNumber} from "../../model/SerialNumber";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  isSerialNumbersLoaded = false;
  displayedColumns: string[] = ['number', 'ptArt', 'savedAt'];//columns of table
  lastAddedSerials: SerialNumber[];
  dataSource = new MatTableDataSource<SerialNumber>;

  constructor(private serialNumberService: SerialNumberService) {
    this.lastAddedSerials = [
      {
        "id": "id", "number": "number", "ptArt": "art", "comment": "comment",
        "customer": "customer", "savedAt": new Date(),
        "createdAt": new Date()
      },
      {
        "id": "2", "number": "1234", "ptArt": "805", "comment": "comment",
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

}
