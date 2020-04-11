import { RecipesService } from './../recipes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { AlertController } from '@ionic/angular';
import { Button } from 'protractor';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
loadedRecipe: Recipe;


  constructor(private activatedRoute:ActivatedRoute,
    private recipesService:RecipesService,
    private router:Router,
    private alertCtl:AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paraMap=>{
      if(!paraMap.has('recipeId')){
        this.router.navigate(['./']);
        return;
      }
      const recipeId=paraMap.get("recipeId")
      this.loadedRecipe=this.recipesService.getRecipe(recipeId);
    });


  }
  Delete(idi:string){
    this.alertCtl.create({
      header:"Bhai Pakka?",
      message:"Dekh delete krke kya milega ...tere kaunsa storage jaa rha he",
      buttons:[
        {
          text:'Cancel',
          role:'cancel'
          
        },
        {
          text:'Delete',
          handler: ()=>{
            this.recipesService.deleteRecipe(this.loadedRecipe.id);
            this.router.navigate(['/recipes']);
          }
        }
      ]
    }).then(alertEle=>{
      alertEle.present();
    })
    this.ngOnInit();
    
  }



}
