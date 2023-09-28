import{Injectable} from '@angular/core'
@Injectable()

export class ImageService{
    visibleImages:{id:number;category:string;caption :string;url:string;}[]=[];
    getImages(){
    return this.visibleImages=IMAGES.slice(0);
    }
    getImage(id:number){
        return IMAGES.slice(0).find(image=>image.id==id)
    }
    

}
const IMAGES=
[
    
        {"id":1,"category":"boats","caption":"view from a bot","url":"assets/img/boat_01.jpeg"},
        {"id":2,"category":"boats","caption":"Sailing the cost","url":"assets/img/boat_02.jpeg"},
        {"id":3,"category":"boats","caption":"sunset Pier","url":"assets/img/boat_03.jpeg"},
        {"id":4,"category":"boats","caption":"Sunday Afternon","url":"assets/img/boat_04.jpeg"},
        {"id":5,"category":"boats","caption":"Sunset at the docks ","url":"assets/img/boat_05.jpeg"},
        {"id":6,"category":"camping","caption":"Camping trip " ,"url":"assets/img/camping_01.jpeg"},
        {"id":7,"category":"camping","caption":"kim and Jessie","url":"assets/img/camping_02.jpeg"},
        {"id":8,"category":"camping","caption":"view from the top","url":"assets/img/camping_03.jpeg"},
        {"id":9,"category":"camping","caption":"On the trail","url":"assets/img/camping_04.jpeg"},
        {"id":10,"category":"camping","caption":"our camping spot","url":"assets/img/camping_05.jpeg"},
        {"id":11,"category":"camping","caption":"RV Life","url":"assets/img/camping_06.jpeg"},
        {"id":12,"category":"camping","caption":"Hiking trip 2017","url":"assets/img/camping_07.jpeg"},
        {"id":13,"category":"library","caption":"big library","url":"assets/img/library_01.jpeg"},
        {"id":14,"category":"library","caption":"Stacks","url":"assets/img/library_02.jpeg"},
        {"id":15,"category":"library","caption":"saturday afternonn","url":"assets/img/library_03.jpeg"},
        {"id":16,"category":"library","caption":"local library","url":"assets/img/library_04.jpeg"},
        {"id":17,"category":"library","caption":"Nice library","url":"assets/img/library_05.jpeg"},
       

    
]