import { Component,ViewChild,OnInit} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';


export interface PeriodicElement {
  id:string
  Region: string;
  Date: string;
  Rep: string;
  Item: string;
  Units:number;
  UnitCost:string;
  Total:string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    "id": "1",
    "Date": "15/02/2020",
    "Region": "West",
    "Rep": "Lilly",
    "Item": "Pen",
    "Units": 29,
    "UnitCost": "971.00",
    "Total": "28159.00"
  },
  {
    "id": "2",
    "Date": "28/05/2020",
    "Region": "West",
    "Rep": "Gerhard",
    "Item": "Binder",
    "Units": 83,
    "UnitCost": "664.00",
    "Total": "55112.00"
  },
  {
    "id": "3",
    "Date": "12/12/2019",
    "Region": "East",
    "Rep": "Kameron",
    "Item": "Pencil",
    "Units": 82,
    "UnitCost": "224.00",
    "Total": "18368.00"
  },
  {
    "id": "4",
    "Date": "22/06/2019",
    "Region": "West",
    "Rep": "Lexus",
    "Item": "Binder",
    "Units": 83,
    "UnitCost": "553.00",
    "Total": "45899.00"
  },
  {
    "id": "5",
    "Date": "05/07/2019",
    "Region": "East",
    "Rep": "Jamaal",
    "Item": "Pencil",
    "Units": 98,
    "UnitCost": "858.00",
    "Total": "84084.00"
  },
  {
    "id": "6",
    "Date": "08/03/2020",
    "Region": "West",
    "Rep": "Collin",
    "Item": "Pen",
    "Units": 30,
    "UnitCost": "366.00",
    "Total": "10980.00"
  },
  {
    "id": "7",
    "Date": "14/01/2020",
    "Region": "Central",
    "Rep": "Janis",
    "Item": "Pen",
    "Units": 81,
    "UnitCost": "196.00",
    "Total": "15876.00"
  },
  {
    "id": "8",
    "Date": "13/05/2020",
    "Region": "East",
    "Rep": "Libby",
    "Item": "Pencil",
    "Units": 89,
    "UnitCost": "855.00",
    "Total": "76095.00"
  },
  {
    "id": "9",
    "Date": "01/11/2019",
    "Region": "East",
    "Rep": "Erika",
    "Item": "Pen",
    "Units": 80,
    "UnitCost": "293.00",
    "Total": "23440.00"
  },
  {
    "id": "10",
    "Date": "04/10/2019",
    "Region": "Central",
    "Rep": "Electa",
    "Item": "Pencil",
    "Units": 80,
    "UnitCost": "569.00",
    "Total": "45520.00"
  },
  {
    "id": "11",
    "Date": "24/10/2019",
    "Region": "West",
    "Rep": "Sadie",
    "Item": "Pencil",
    "Units": 94,
    "UnitCost": "589.00",
    "Total": "55366.00"
  },
  {
    "id": "12",
    "Date": "18/06/2019",
    "Region": "West",
    "Rep": "Thurman",
    "Item": "Pencil",
    "Units": 83,
    "UnitCost": "733.00",
    "Total": "60839.00"
  },
  {
    "id": "13",
    "Date": "01/12/2019",
    "Region": "West",
    "Rep": "Callie",
    "Item": "Pencil",
    "Units": 36,
    "UnitCost": "232.00",
    "Total": "8352.00"
  },
  {
    "id": "14",
    "Date": "03/03/2020",
    "Region": "East",
    "Rep": "Braden",
    "Item": "Pen",
    "Units": 64,
    "UnitCost": "634.00",
    "Total": "40576.00"
  },
  {
    "id": "15",
    "Date": "24/10/2019",
    "Region": "East",
    "Rep": "Blair",
    "Item": "Pencil",
    "Units": 93,
    "UnitCost": "676.00",
    "Total": "62868.00"
  },
  {
    "id": "16",
    "Date": "04/10/2019",
    "Region": "East",
    "Rep": "Wanda",
    "Item": "Pen",
    "Units": 62,
    "UnitCost": "162.00",
    "Total": "10044.00"
  },
  {
    "id": "17",
    "Date": "11/02/2020",
    "Region": "East",
    "Rep": "Lewis",
    "Item": "Pen",
    "Units": 79,
    "UnitCost": "503.00",
    "Total": "39737.00"
  },
  {
    "id": "18",
    "Date": "22/06/2019",
    "Region": "East",
    "Rep": "Liam",
    "Item": "Pencil",
    "Units": 91,
    "UnitCost": "913.00",
    "Total": "83083.00"
  },
  {
    "id": "19",
    "Date": "06/04/2020",
    "Region": "Central",
    "Rep": "Otho",
    "Item": "Pencil",
    "Units": 74,
    "UnitCost": "457.00",
    "Total": "33818.00"
  },
  {
    "id": "20",
    "Date": "04/09/2019",
    "Region": "East",
    "Rep": "Cayla",
    "Item": "Pencil",
    "Units": 13,
    "UnitCost": "371.00",
    "Total": "4823.00"
  },
  {
    "id": "21",
    "Date": "25/10/2019",
    "Region": "Central",
    "Rep": "Marcelle",
    "Item": "Binder",
    "Units": 34,
    "UnitCost": "974.00",
    "Total": "33116.00"
  },
  {
    "id": "22",
    "Date": "15/03/2020",
    "Region": "Central",
    "Rep": "Jett",
    "Item": "Pencil",
    "Units": 41,
    "UnitCost": "662.00",
    "Total": "27142.00"
  },
  {
    "id": "23",
    "Date": "26/02/2020",
    "Region": "West",
    "Rep": "Ettie",
    "Item": "Binder",
    "Units": 85,
    "UnitCost": "591.00",
    "Total": "50235.00"
  },
  {
    "id": "24",
    "Date": "08/08/2019",
    "Region": "East",
    "Rep": "Jaden",
    "Item": "Binder",
    "Units": 52,
    "UnitCost": "157.00",
    "Total": "8164.00"
  },
  {
    "id": "25",
    "Date": "23/08/2019",
    "Region": "West",
    "Rep": "Harold",
    "Item": "Pencil",
    "Units": 19,
    "UnitCost": "69.00",
    "Total": "1311.00"
  },
  {
    "id": "26",
    "Date": "29/03/2020",
    "Region": "East",
    "Rep": "Angeline",
    "Item": "Pen",
    "Units": 99,
    "UnitCost": "988.00",
    "Total": "97812.00"
  }
]
;
let getb=function(l){
  return l
}

let b:string[]=["Pen","Pencil","East","West","Central","Binder"]
const marvelHeroes =(a)=>ELEMENT_DATA.filter(function(hero) {
  console.log(a,"s")
  
  for(let i=0;i<a.length;i++){
     if(hero.Region==a[i] || hero.Item==a[i]){
      return hero
     }
  }
  
  
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  
  displayedColumns: string[] = ['Date', 'Region', 'Rep', 'Item','Units','UnitCost','Total'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  isDisplay=false;
  isChecked:boolean = true;
  isChecked2:boolean = true;
  isChecked3:boolean = true;
  isChecked4:boolean = true;
  isChecked5:boolean = true;
  isChecked6:boolean = true;
  toggledisplay(){
      this.isDisplay = !this.isDisplay
      // this.displayedColumns=['Date', 'Region', 'Rep', 'Item']
      // if( !this.isDisplay){
      //   this.displayedColumns=['Date', 'Region', 'Rep', 'Item','Units','UnitCost','Total'];
      // }
  
  }

  
  
  doCheck($event,stat) {
   
    
    
    
    
    if($event.checked){
      b.push(stat)
      
      
    }
    else{
      let index = b.indexOf(stat);
        if (index >= 0) {
          b.splice( index, 1 );
          
          }
          
    }
    this.dataSource= new MatTableDataSource(marvelHeroes(b))
    this.dataSource.sort = this.sort;
    
  }
  // toggleEditable($event){
    
  //   var checkBox = document.getElementById("myCheck");
  //   if ($event == true){
  //     console.log(this.isChecked)
  //   } else {
  //     console.log(this.isChecked)
  //   }

  // }
  
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    console.log(this.dataSource)
 
  }
}
