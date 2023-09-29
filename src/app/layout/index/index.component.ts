import {Component, OnInit} from '@angular/core';
import {SerialNumberService} from "../../service/serial-number.service";
import {SerialNumber} from "../../model/SerialNumber";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  isSerialNumbersLoaded = false;

  lastAddedSerials: SerialNumber[];

  constructor(private serialNumberService: SerialNumberService) {
    this.lastAddedSerials = [];
  }


  ngOnInit(): void {
    this.serialNumberService.getLastAddedSerials()
      .subscribe({
        next: (serials) => {
          console.log("Retrieving last added serial numbers");
          this.lastAddedSerials = serials;
        }
      })
  }

}
