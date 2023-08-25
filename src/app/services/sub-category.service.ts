import { Injectable } from '@angular/core';
import { SubCategory } from '../models/Sub-Category';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {
  private subCategories: SubCategory[] = [
    {
      id: 1,
      name: 'Shoes',
      price: 10,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis soluta corporis dolores consectetur at. Voluptatum, modi minima atque suscipit cupiditate dicta expedita ab, impedit natus maxime accusamus hic repellendus. Sequi.'
    },
    {
      id: 2,
      name: 'Jeans',
      price: 20,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis soluta corporis dolores consectetur at. Voluptatum, modi minima atque suscipit cupiditate dicta expedita ab, impedit natus maxime accusamus hic repellendus. Sequi.'
    },
    {
      id: 2,
      name: 'Bags',
      price: 30,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis soluta corporis dolores consectetur at. Voluptatum, modi minima atque suscipit cupiditate dicta expedita ab, impedit natus maxime accusamus hic repellendus. Sequi.'
    }
  ];

  constructor() { }

  list(): SubCategory[] {
    return this.subCategories;
  }
}
