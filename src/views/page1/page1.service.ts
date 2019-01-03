/* As an example this service will return users from REST service */
import { HttpService } from '@/common/services/http.service';
import { User } from './page1.interface';
import { AxiosPromise } from 'axios';
export class Page1Service {
    private httpService = new HttpService();
    public getUsers(): AxiosPromise {
        return this.httpService.get('/users/23');
    }
}