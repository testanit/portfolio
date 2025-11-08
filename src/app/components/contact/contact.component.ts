import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  ngOnInit(): void {}

  contactEmail = 'ivicj123@gmail.com';
  githubUrl = 'https://github.com/ivicj/';
  linkedInUrl = 'https://www.linkedin.com/in/ivicjelena/';

  // EmailJS configuration - replace these with your real values or wire to environment
  private EMAILJS_SERVICE_ID = 'service_sez44sw';
  private EMAILJS_TEMPLATE_ID = 'template_8o12nlg';
  private EMAILJS_PUBLIC_KEY = 'SoNVDay5KV5QzXisH';

  sending = false;

  async sendEmail(form: NgForm) {
    console.log('sendEmail called');
    if (!form || form.invalid) return;
    this.sending = true;
    console.log(this.sending);
    try {
      const templateParams = { ...form.value };
      console.log(templateParams);
      const res = await emailjs.send(
        this.EMAILJS_SERVICE_ID,
        this.EMAILJS_TEMPLATE_ID,
        templateParams,
        this.EMAILJS_PUBLIC_KEY
      );
      console.log('EmailJS OK:', res.status, res.text);
      form.resetForm();
      alert('Thanks! Your message was sent.');
    } catch (err) {
      console.error('EmailJS error:', err);
      alert('Sorry—something went wrong sending your message.');
    } finally {
      this.sending = false;
    }
  }
}
