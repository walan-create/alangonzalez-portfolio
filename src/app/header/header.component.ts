import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  isDark = false;

  ngOnInit(): void {
    const saved = localStorage.getItem('theme');
    const mode =
      saved === 'dark'
        ? 'dark'
        : saved === 'light'
        ? 'light'
        : window.matchMedia?.('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';

    this.applyTheme(mode as 'light' | 'dark');
    this.isDark = mode === 'dark';
  }

  onToggleTheme(checked: boolean) {
    const mode = checked ? 'dark' : 'light';
    this.applyTheme(mode);
    localStorage.setItem('theme', mode);
  }

  private applyTheme(mode: 'light' | 'dark') {
    const html = document.documentElement;
    if (mode === 'dark') {
      html.classList.add('dark');
      html.setAttribute('data-theme', 'dark');
    } else {
      html.classList.remove('dark');
      html.setAttribute('data-theme', 'light');
    }
  }
}
