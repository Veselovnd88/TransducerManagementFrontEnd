import {Component, OnInit} from '@angular/core';
import {SerialNumberService} from "../../service/serial-number.service";
import {SerialNumber} from "../../model/SerialNumber";
import {MatTableDataSource} from "@angular/material/table";
import {FormControl, FormGroup, Validators} from "@angular/forms";

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
  public checkSerialForm!: FormGroup;

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
    this.checkSerialForm = new FormGroup({
      findSerial: new FormControl<string>('', [Validators.required])
    });
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

  public submit(): void {
    console.log("Submit pressed")
    console.log(this.checkSerialForm.value.findSerial)
  }

}
