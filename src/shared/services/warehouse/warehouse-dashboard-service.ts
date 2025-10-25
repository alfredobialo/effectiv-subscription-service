import {inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {delay} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WarehouseDashboardService {
  http = inject(HttpClient);

  getWarehouseList()
  {
      return delay(3000);
  }

}
