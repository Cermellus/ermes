/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { ErmesTestModule } from '../../../test.module';
import { CreditRequestStatusDeleteDialogComponent } from 'app/entities/credit-request-status/credit-request-status-delete-dialog.component';
import { CreditRequestStatusService } from 'app/entities/credit-request-status/credit-request-status.service';

describe('Component Tests', () => {
    describe('CreditRequestStatus Management Delete Component', () => {
        let comp: CreditRequestStatusDeleteDialogComponent;
        let fixture: ComponentFixture<CreditRequestStatusDeleteDialogComponent>;
        let service: CreditRequestStatusService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [ErmesTestModule],
                declarations: [CreditRequestStatusDeleteDialogComponent]
            })
                .overrideTemplate(CreditRequestStatusDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(CreditRequestStatusDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CreditRequestStatusService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', inject(
                [],
                fakeAsync(() => {
                    // GIVEN
                    spyOn(service, 'delete').and.returnValue(of({}));

                    // WHEN
                    comp.confirmDelete(123);
                    tick();

                    // THEN
                    expect(service.delete).toHaveBeenCalledWith(123);
                    expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                })
            ));
        });
    });
});
