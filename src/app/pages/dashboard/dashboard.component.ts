import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="max-w-4xl mx-auto">
      <div class="bg-white rounded-lg shadow p-6 mb-6">
        <h2 class="text-2xl font-bold mb-4">Welcome, {{ user?.name || 'User' }}</h2>
        <div class="grid grid-cols-3 gap-6">
          <div class="bg-blue-50 p-4 rounded-lg">
            <h3 class="font-semibold mb-2">Subscription Tier</h3>
            <p class="capitalize">{{ user?.tier || 'free' }}</p>
          </div>
          <div class="bg-green-50 p-4 rounded-lg">
            <h3 class="font-semibold mb-2">API Calls Today</h3>
            <p>{{ user?.dailyCalls || 0 }} / {{ (user?.tier || 'free') === 'premium' ? '∞' : '20' }}</p>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg">
            <h3 class="font-semibold mb-2">Status</h3>
            <p>{{ ((user?.dailyCalls || 0) >= 20 && (user?.tier || 'free') === 'free') ? 'Limit Reached' : 'Active' }}</p>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-2xl font-bold mb-4">Recent Queries</h2>
        <div class="space-y-4">
          <p class="text-gray-500 italic">No recent queries found.</p>
        </div>
      </div>
    </div>
  `
})
export class DashboardComponent implements OnInit {
  user: User | null = null;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.currentUser$.subscribe(user => {
      this.user = user;
    });
  }
}