import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="max-w-4xl mx-auto">
      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-2xl font-bold mb-6">AI Chat Assistant</h2>
        
        <div class="h-96 border rounded-lg p-4 mb-4 overflow-y-auto bg-gray-50">
          <p class="text-gray-500 italic text-center">
            Start a conversation with our AI assistant
          </p>
        </div>

        <div class="flex gap-4">
          <input
            type="text"
            [(ngModel)]="message"
            (keyup.enter)="sendMessage()"
            placeholder="Type your message..."
            class="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            (click)="sendMessage()"
            class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  `
})
export class ChatComponent {
  message = '';

  constructor(private auth: AuthService) {}

  sendMessage() {
    if (!this.message.trim()) return;
    
    // TODO: Implement chat functionality
    console.log('Sending message:', this.message);
    this.message = '';
  }
}