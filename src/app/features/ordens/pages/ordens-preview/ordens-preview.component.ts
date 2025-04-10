import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigCardComponent } from '../../../../shared/components/cards/big-card/big-card.component';

@Component({
  standalone: true,
  selector: 'app-ordens-preview',
  templateUrl: './ordens-preview.component.html',
  styleUrls: ['./ordens-preview.component.scss'],
  imports: [CommonModule, BigCardComponent]
})
export class OrdensPreviewComponent {
  ordens = [
    { id: 1, cliente: 'Lucas', status: 'Aberta', data: '10/04/2025' },
    { id: 2, cliente: 'João', status: 'Em andamento', data: '09/04/2025' },
    { id: 3, cliente: 'Maria', status: 'Concluída', data: '08/04/2025' }
  ];
}
