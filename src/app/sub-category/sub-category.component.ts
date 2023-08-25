import { Component } from '@angular/core';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent {
  subCategories: any[] = [
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
  searchText: string = '';

  onSearch() {
    console.log(this.searchText);
  }
}
