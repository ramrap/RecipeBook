import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipes : Recipe[]=[
    {
      id:"r1",
      title:"dhokla",
      //:"https://www../search?hl=en&tbm=isch&source=hp&biw=1440&bih=723&ei=kPqPXrqCFYK-3LUP5cmLmAc&q=dhokla&oq=dhokla&gs_lcp=CgNpbWcQAzICCAAyBQgAEIMBMgUIABCDATICCAAyAggAMgIIADICCAAyAggAMgIIADICCABKHQgXEhkyZzE4NGcxNTJnMTk0ZzE1NmcxNDhnMTQ4ShEIGBINMWcxZzFnMWcxZzFnMVC3DliFGWC8HGgAcAB4AIABugGIAaIHkgEDMC42mAEAoAEBqgELZ3dzLXdpei1pbWewAQA&sclient=img&ved=0ahUKEwi6irSIh93oAhUCH7cAHeXkAnMQ4dUDCAc&uact=5#imgrc=kokKfgTIgKgdlM",
      ingredients:["maida","tel","aata"],
      imageUrl:"https://upload.wikimedia.org/wikipedia/commons/8/87/Marro_Dhokla.jpg"

    },
    {
      id:"r2",
      title:"idli sambhar",
      //imageUrl:"https://www.google.com/search?hl=en&tbm=isch&source=hp&biw=1440&bih=723&ei=kPqPXrqCFYK-3LUP5cmLmAc&q=idli&oq=idli&gs_lcp=CgNpbWcQAzICCAAyAggAMgIIADICCAAyBQgAEIMBMgIIADICCAAyAggAMgIIADICCABKFQgXEhEyZzE4N2cxNjdnMTQ4ZzE1NEoNCBgSCTFnMWcxZzFnMVCnDlj5EmDFGmgAcAB4AIABrwGIAe0EkgEDMC40mAEAoAEBqgELZ3dzLXdpei1pbWewAQA&sclient=img&ved=0ahUKEwi6irSIh93oAhUCH7cAHeXkAnMQ4dUDCAc&uact=5#imgrc=Xrsk-rg86j8pQM",
      ingredients:["dal","tel","sambhar"],
      imageUrl:"https://www.sandyathome.com/wp-content/uploads/2017/07/mini-sambar-idli.png"


    }
  ];

  constructor() { }

  getAllRecipe(){
    return[...this.recipes];

  }


  getRecipe(recipeId:string){
    return {...this.recipes.find(recipe=>{
      return recipe.id===recipeId;
    })}
  }
  deleteRecipe(recipeId:string){
    this.recipes=this.recipes.filter(recipe=>{
      return recipeId!=recipe.id;
    }


    )
  }
}
