import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './services/user/user.service';
import { LoadingService } from './services/loading/loading.service';
import { SearchPipe } from './pipes/search/search.pipe';
import { KeysPipe } from './pipes/keys/keys.pipe';

import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { ModalDialogService } from 'ngx-modal-dialog';

@NgModule({
    imports: [
        CommonModule,
        BootstrapModalModule
    ],
    providers: [
        UserService,
        LoadingService,
        ModalDialogService
    ],
    exports: [
        SearchPipe,
        KeysPipe
    ],
    entryComponents: [
    ],
    declarations: [SearchPipe, KeysPipe]
})
export class SharedModule { }
