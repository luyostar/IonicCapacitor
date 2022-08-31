import { Injectable } from '@angular/core';
import { HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UrlService {
  public hotUrl='https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0'; 
  public hotUrlB='j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0'; 

  
  public bestUrl='https://movie.douban.com/review/best/?start=';
  
  public moiveUrl='https://movie.douban.com/j/subject_abstract?subject_id='   // '/subject/'; 
  public moiveUrlB='j/subject_abstract?subject_id='   // '/subject/'; 
  
  public newUrl='https://movie.douban.com/j/search_subjects?type=movie&tag=%E6%9C%80%E6%96%B0&page_limit=20&page_start='
  
  public newShortUrl='https://movie.douban.com/j/search_subjects?type=movie&tag=';
  public newShortUrlB='j/search_subjects?type=movie&tag=';

  public searchUrl='https://movie.douban.com/movie/subject_search?search_text=%E4%BA%BA%E7%94%9F1&cat=1002';


  // ****以下为正式环境
  public moviesUrl='http://36.133.149.109:8008/api/movies';

  // public commentUrl='http://127.0.0.1:5000/api/comment';
  public commentUrl='http://36.133.149.109:8008/api/comment';
  public commentUrlB='api/comment';

  // public userUrl="http://127.0.0.1:5000/api/users/";
  public userUrl="http://36.133.149.109:8008/api/users/";
  public userUrlB="api/users/";

  // public userExistUrl="http://127.0.0.1:5000/api/users/exist/";
  public userExistUrl="http://36.133.149.109:8008/api/users/exist/";
  public userExistUrlB="api/users/exist/";

  // public userLoginUrl="http://127.0.0.1:5000/api/users/login/";
  public userLoginUrl="http://36.133.149.109:8008/api/users/login/";
  public userLoginUrlB="api/users/login/";

  constructor() { }

  public httpOptions={
    headers:new HttpHeaders(
      {
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET,POST',
        'Cache-Control':'no-cache',
        'Pragma':'no-cache'
      })
  };
}
