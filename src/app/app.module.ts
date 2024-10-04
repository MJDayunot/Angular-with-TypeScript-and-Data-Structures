import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {StudentListComponent} from "./components/studentlist/studentlist.component";
import {FormsModule} from "@angular/forms";
import {EmployeeListComponent} from "./components/employeelist/employeelist.component";
import {FruitListComponent} from "./components/fruitlist/fruitlist.component";
import {CourseListComponent} from "./components/courselist/courselist.component";
import {BookListComponent} from "./components/booklist/booklist.component";
import {CityListComponent} from "./components/citylist/citylist.component";
import {MovieListComponent} from "./components/movielist/movielist.component";
import {CarModelListComponent} from "./components/carmodellist/carmodellist.component";
import {ProductListComponent} from "./components/productlist/productlist.component";
import {SubjectListComponent} from "./components/subjectlist/subjectlist.component";
import {CountryListComponent} from "./components/countrylist/countrylist.component";
import {SportsListComponent} from "./components/sportslist/sportslist.component";
import {VegetableListComponent} from "./components/vegetablelist/vegetablelist.component";
import {AnimalListComponent} from "./components/animallist/animallist.component";
import {ToolListComponent} from "./components/toollist/toollist.component";
import {LanguageListComponent} from "./components/languagelist/languagelist.component";
import {GameListComponent} from "./components/gamelist/gamelist.component";
import {SoftwareListComponent} from "./components/softwarelist/softwarelist.component";
import {PhoneContactListComponent} from "./components/phonecontactlist/phonecontactlist.component";
import {MusicPlaylistComponent} from "./components/musicplaylist/musicplaylist.component";
import {FoodMenuComponent} from "./components/foodmenu/foodmenu.component";
import {GroceryListComponent} from "./components/grocerylist/grocerylist.component";
import {ClassroomListComponent} from "./components/classroomlist/classroomlist.component";
import {InventoryListComponent} from "./components/inventorylist/inventorylist.component";
import {LectureListComponent} from "./components/lecturelist/lecturelist.component";
import {StationeryListComponent} from "./components/stationerylist/stationerylist.component";
import {FlowerListComponent} from "./components/flowerlist/flowerlist.component";
import {DestinationListComponent} from "./components/destinationlist/destinationlist.component";
import {LaptopListComponent} from "./components/laptoplist/laptoplist.component";
import {LaptopSpecificationsListComponent} from "./components/laptopspecificationslist/laptopspecificationslist.component";
import {ComputerHardwareListComponent} from "./components/computerhardwarelist/computerhardwarelist.component";
import {MobileAppListComponent} from "./components/mobileapplist/mobileapplist.component";
import {VideoListComponent} from "./components/videolist/videolist.component";
import {TvShowListComponent} from "./components/tvshowlist/tvshowlist.component";
import {FurnitureListComponent} from "./components/furniturelist/furniturelist.component";
import {AccessoryListComponent} from "./components/accessorylist/accessorylist.component";
import {BuildingListComponent} from "./components/buildinglist/buildinglist.component";
import {PaintingListComponent} from "./components/paintinglist/paintinglist.component";
import {ArtistListComponent} from "./components/artistlist/artistlist.component";
import {ComposerListComponent} from "./components/composerlist/composerlist.component";
import {PodcastListComponent} from "./components/podcastlist/podcastlist.component";
import {ExerciseListComponent} from "./components/exerciselist/exerciselist.component";
import {MealPlanListComponent} from "./components/mealplanlist/mealplanlist.component";
import {BudgetListComponent} from "./components/budgetlist/budgetlist.component";
import {PresentationListComponent} from "./components/presentationlist/presentationlist.component";
import {TourListComponent} from "./components/tourlist/tourlist.component";
import {EventListComponent} from "./components/eventlist/eventlist.component";
import {DeveloperToolsListComponent} from "./components/developertoolslist/developertoolslist.component";
import {FrameworkListComponent} from "./components/frameworklist/frameworklist.component";
import {LibraryListComponent} from "./components/librarylist/librarylist.component";

const routes: Routes = [
    { path: 'studentlist', component: StudentListComponent },
    { path: 'employeelist', component: EmployeeListComponent },
    { path: 'fruitlist', component: FruitListComponent },
    { path: 'courselist', component: CourseListComponent },
    { path: 'booklist', component: BookListComponent },
    { path: 'citylist', component: CityListComponent },
    { path: 'movielist', component: MovieListComponent },
    { path: 'carmodellist', component: CarModelListComponent },
    { path: 'productlist', component: ProductListComponent },
    { path: 'subjectlist', component: SubjectListComponent },
    { path: 'countrylist', component: CountryListComponent },
    { path: 'sportslist', component: SportsListComponent },
    { path: 'vegetablelist', component: VegetableListComponent },
    { path: 'animallist', component: AnimalListComponent },
    { path: 'toollist', component: ToolListComponent },
    { path: 'languagelist', component: LanguageListComponent },
    { path: 'gamelist', component: GameListComponent },
    { path: 'softwarelist', component: SoftwareListComponent },
    { path: 'phonecontactlist', component: PhoneContactListComponent },
    { path: 'musicplaylist', component: MusicPlaylistComponent },
    { path: 'foodmenu', component: FoodMenuComponent },
    { path: 'grocerylist', component: GroceryListComponent },
    { path: 'classroomlist', component: ClassroomListComponent },
    { path: 'inventorylist', component: InventoryListComponent },
    { path: 'lecturelist', component: LectureListComponent },
    { path: 'stationerylist', component: StationeryListComponent },
    { path: 'flowerlist', component: FlowerListComponent },
    { path: 'destinationlist', component: DestinationListComponent },
    { path: 'laptoplist', component: LaptopListComponent },
    { path: 'laptopspecificationslist', component: LaptopSpecificationsListComponent },
    { path: 'computerhardwarelist', component: ComputerHardwareListComponent },
    { path: 'mobileapplist', component: MobileAppListComponent },
    { path: 'videolist', component: VideoListComponent },
    { path: 'tvshowlist', component: TvShowListComponent },
    { path: 'furniturelist', component: FurnitureListComponent },
    { path: 'accessorylist', component: AccessoryListComponent },
    { path: 'buildinglist', component: BuildingListComponent },
    { path: 'paintinglist', component: PaintingListComponent },
    { path: 'artistlist', component: ArtistListComponent },
    { path: 'composerlist', component: ComposerListComponent },
    { path: 'podcastlist', component: PodcastListComponent },
    { path: 'exerciselist', component: ExerciseListComponent },
    { path: 'mealplanlist', component: MealPlanListComponent },
    { path: 'budgetlist', component: BudgetListComponent },
    { path: 'presentationlist', component: PresentationListComponent },
    { path: 'tourlist', component: TourListComponent },
    { path: 'eventlist', component: EventListComponent },
    { path: 'developertoolslist', component: DeveloperToolsListComponent },
    { path: 'frameworklist', component: FrameworkListComponent },
    { path: 'librarylist', component: LibraryListComponent }

];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes, {enableTracing: true}),
        FormsModule,
    ],
    declarations: [
        AppComponent,
        StudentListComponent,
        EmployeeListComponent,
        FruitListComponent,
        CourseListComponent,
        BookListComponent,
        CityListComponent,
        MovieListComponent,
        CarModelListComponent,
        ProductListComponent,
        SubjectListComponent,
        CountryListComponent,
        SportsListComponent,
        VegetableListComponent,
        AnimalListComponent,
        ToolListComponent,
        LanguageListComponent,
        GameListComponent,
        SoftwareListComponent,
        PhoneContactListComponent,
        MusicPlaylistComponent,
        FoodMenuComponent,
        GroceryListComponent,
        ClassroomListComponent,
        InventoryListComponent,
        LectureListComponent,
        StationeryListComponent,
        FlowerListComponent,
        DestinationListComponent,
        LaptopListComponent,
        LaptopSpecificationsListComponent,
        ComputerHardwareListComponent,
        MobileAppListComponent,
        VideoListComponent,
        TvShowListComponent,
        FurnitureListComponent,
        AccessoryListComponent,
        BuildingListComponent,
        PaintingListComponent,
        ArtistListComponent,
        ComposerListComponent,
        PodcastListComponent,
        ExerciseListComponent,
        MealPlanListComponent,
        BudgetListComponent,
        PresentationListComponent,
        TourListComponent,
        EventListComponent,
        DeveloperToolsListComponent,
        FrameworkListComponent,
        LibraryListComponent

    ],
    providers: [

    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
