
import {Observable} from 'rxjs';
import {BaseHttp} from '../base/base-http';
import {BaseService} from '../base/base.service';
import {BebidaModel} from '../model/bebida.model';
import {BebidaMock} from '../mock/bebida.mock';
import {Injectable} from '@angular/core';

@Injectable()
export class BebidaService extends BaseService {

  private resourceUrl = 'http://localhost:3000/bebida';

  constructor(
    public http: BaseHttp
  ) {
    super(http);
    this.setMock(new BebidaMock());
  }

  create(bebida: BebidaModel): Observable<BebidaModel> {
    const copy = this.convert(bebida);
    return this.http.post<BebidaModel>(this.resourceUrl, copy, {observe: 'response'});
  }

  update(bebida: BebidaModel): Observable<BebidaModel> {
    const copy = this.convert(bebida);
    return this.http.patch<BebidaModel>(`${this.resourceUrl}/${bebida.id}`, copy, {observe: 'response'});
  }

  find(id: number): Observable<BebidaModel> {
    return this.http.get<BebidaModel>(`${this.resourceUrl}/${id}`, {observe: 'response'}, id);
  }

  findAll(): Observable<BebidaModel[]> {
    return this.http.getAll<BebidaModel>(this.resourceUrl, {observe: 'response'});
  }

  delete(id: number): Observable<BebidaModel> {
    return this.http.delete<BebidaModel>(`${this.resourceUrl}/${id}`, {observe: 'response'}, id);
  }

  /**
   * Convert a Processo to a JSON which can be sent to the server.
   */
  private convert(bebida: BebidaModel): BebidaModel {
    const copy: BebidaModel = Object.assign({}, bebida);
    return copy;
  }
}
