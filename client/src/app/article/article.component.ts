import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, } from '@angular/forms';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  public articleList: any;
  public isCheckAddForm = false;
  public isCheckUpdateForm = false;
  public isCheckList = true;
  public isAddFormSubmitted = false;
  public showdata: any;
  sectionTitle = "Article";
  articleColumnsArr = [{name: 'Title'}, {name: 'Description'}, {name: 'Author'}, {name: 'Image'}, {name: 'Action'}];
 
  // addArticleForm:FormGroup;
  addArticleForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    author: new FormControl(''),
    image: new FormControl(''),
    email: new FormControl(''),
  })
  editArticleForm=new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    author: new FormControl(''),
    image: new FormControl(''),
    email: new FormControl(''),
  })
  constructor(private articleservice: ArticleService, private formBuilder: FormBuilder) {

    this.addArticleForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')]],
      description: ['', Validators.required],
      author: ['', Validators.required],
      image: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    })
	
	this.editArticleForm=this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')]],
      description: ['', Validators.required],
      author: ['', Validators.required],
      image: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    })

  }

  ngOnInit(): void {
    this.getArticleList();
  }
  getArticleList() {
    this.articleservice.getarticle_List()
      .subscribe(data => {
        if(data.response.length>0){
		 this.articleList = data.response;
		}
      });
  }
  addFormFunc() {
    this.isCheckAddForm = true;
    this.isCheckUpdateForm = false;
    this.isCheckList = false;
  }

  backListFunc() {
    this.isCheckAddForm = false;
    this.isCheckUpdateForm = false;
    this.isCheckList = true;
  }
  onSubmit() {
    this.isAddFormSubmitted = true;
    if (this.addArticleForm.valid) {
      this.articleservice.storeArticle(this.addArticleForm.value).subscribe((result: any) => {
        this.getArticleList();
        this.isCheckList = true;
        this.isCheckAddForm = false;
      });
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.addArticleForm.controls;;
  }

  editFormFunc(event:any){
    console.log(event);
    this.showdata=event;
    this.isCheckUpdateForm=true;
    this.isCheckList=false;
    this.isCheckAddForm=false;
  }


}



