import { Routes, RouterModule } from '@angular/router';

import { TimelineComponent } from './timeline/timeline.component';
import { NewPostComponent } from './new-post/new-post.component';


const APP_ROUTES: Routes =[
    {path: "", redirectTo: "/timeline", pathMatch: "full"},
    {path: "timeline", component:TimelineComponent},
    {path: "newpost", component:NewPostComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES);