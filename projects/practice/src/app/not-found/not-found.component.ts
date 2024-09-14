import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent {

}