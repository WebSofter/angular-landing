import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})


export class AccordionComponent {
  items = [
    { title: 'Интеллектуальный анализ кандидатов интеллектуальный анализ кандидатов',content: 'Описание интеллектуального анализа...' },
    { title: 'Сравнительная оценка', content: `
                                              <b>Объективность</b>
                                              <p>ИИ оценивает кандидатов без предвзятости, основываясь только на данных.</p>
                                              <b>Глубокий анализ</b>
                                              <p>Система учитывает факторы, недоступные человеческому глазу.</p>
                                              <b>Экономия времени</b>
                                              <p>Автоматизированное сравнение ускоряет процесс отбора кандидатов.</p>
                                              ` },
    { title: 'Стратегии удержания сотрудников', content: 'Описание стратегии удержания сотрудников...' },
    { title: 'Инструменты для тестирования и интервью', content: 'Описание инструментов для тестирования и интервью...' }
  ];

  isExpanded: boolean[] = [false, false, false];

  toggle(index: number): void {
    this.isExpanded[index] = !this.isExpanded[index];
  }
}
