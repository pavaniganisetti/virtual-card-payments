import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../services/http-client.service';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  @ViewChild('dataTable', { static: false }) table: ElementRef;
  dataTable: any;
  dtOptions:any;

  page: Number = 1;
  searchDay: string = "";
  searchMonth: string = "";
  searchYear: string = "";
  paymentDetails = [];
  // totalRecords: number;
  // public date = new Date();
  constructor(
    private _httpService: HttpClientService,
    private chRef: ChangeDetectorRef) { }
  
  ngOnInit(): void {

    this.dtOptions = {
      "lengthMenu": [[5,10,15,-1], [5,10,15, "All"]],
      "order": [[ 5, "desc" ]],
      bFilter:false
    }

    this._httpService.getAnalyticsWithId()
      .subscribe((data) => {
        this.paymentDetails = data;

        this.chRef.detectChanges();

        this.dataTable = $(this.table.nativeElement)
        this.dataTable.dataTable(this.dtOptions);
        // this.totalRecords = this.paymentDetails.length
      })

    
  }
}
