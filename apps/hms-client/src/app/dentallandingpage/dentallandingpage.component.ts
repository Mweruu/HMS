import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";


interface ServiceStep {
  imageSrc: string;
  imageAlt: string;
  title: string;
}

interface FeatureItem {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
}

interface Doctor {
  name: string;
  specialty: string;
  school: string;
  imageUrl: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  date: string;
  doctor: string;
  message: string;
  privacyAccepted: boolean;
}

export interface NewsletterFormData {
  firstName: string;
  email: string;
}

interface SubscriptionForm {
  firstName: string;
  email: string;
}

interface AppointmentForm {
  fullName: string;
  phone: string;
  date: string;
  doctor: string;
  message: string;
  privacyPolicy: boolean;
}

interface DoctorProfile {
  name: string;
  specialty: string;
  school: string;
  imageUrl: string;
}

@Component({
  selector: 'app-dentallandingpage',
  templateUrl: './dentallandingpage.component.html',
  styleUrl: './dentallandingpage.component.css',
})
export class DentallandingpageComponent {
  doctors: Doctor[] = [
    {
      name: "Dr. Jeanette Hoff",
      specialty: "Orthodontic Treatment",
      school: "Yale Medical School",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/a9df48fa3ed7642253e6eb571be9196ba2b75784ed076a61bca690306afa28af?placeholderIfAbsent=true&apiKey=d08c537fa1474c3f998c9c04b4302930"
    },
    {
      name: "Dr. David Ambrose",
      specialty: "Orthodontic Treatment", 
      school: "Harvard Medical School",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/d690003fc77044cb58c6b4e3ad2350123c648522b1fc66ad9b3bd11e9d573130?placeholderIfAbsent=true&apiKey=d08c537fa1474c3f998c9c04b4302930"
    },
    {
      name: "Dr. Jenelia Breton",
      specialty: "Orthodontic Treatment",
      school: "Oxford Medical School",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/3987f114bfd3b6d3b352f8e4f5608e759393c1c8363251e9774eca5ddb0b341e?placeholderIfAbsent=true&apiKey=d08c537fa1474c3f998c9c04b4302930"
    },
    {
      name: "Dr. Jagajeet Aurora",
      specialty: "Orthodontic Treatment",
      school: "Harvard Medical School",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/2f6280b2485602f89ed7abc1493d51782caa0c49ad75a3f7bb2d1afcbb163838?placeholderIfAbsent=true&apiKey=d08c537fa1474c3f998c9c04b4302930"
    }
  ];serviceSteps: ServiceStep[] = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ff93d459df0d7cce72f65be5f3b1bba27efbaf8778fb04f14380f9482bd51e8b?placeholderIfAbsent=true&apiKey=d08c537fa1474c3f998c9c04b4302930",
      imageAlt: "Phone icon representing appointment booking",
      title: "Call for\nappointment"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/eadf2127868ff2401aa07b83e9ba90a7ef2ef9b4ca91c47d1442495c34c8b4fe?placeholderIfAbsent=true&apiKey=d08c537fa1474c3f998c9c04b4302930",
      imageAlt: "Calendar icon representing date selection",
      title: "Get a\nDate & Serial"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/fef9ed9964d5a33d79bb16197d82f7b0336a613065aaa9d0cf705e15f83dcfa8?placeholderIfAbsent=true&apiKey=d08c537fa1474c3f998c9c04b4302930",
      imageAlt: "Dentist consultation icon",
      title: "Consult\nYour dentist"
    }
  ];

  topFeatures: FeatureItem[] = [
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/96e68cac34975dfc21dae8bc3d71f6f51b029aad05c9831f8c9c63bfd907f8ea?placeholderIfAbsent=true&apiKey=d08c537fa1474c3f998c9c04b4302930",
      imgAlt: "Laser Technology Icon",
      title: "Laser Technology",
      description: "Worlds most advanced Diode Laser. Your treatment experience will be relaxing & smooth."
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/653d1f517b59f28c84f51d1a546150bdee97c203cbf432b49594ca14e0bb6251?placeholderIfAbsent=true&apiKey=d08c537fa1474c3f998c9c04b4302930",
      imgAlt: "Painless Injection Icon",
      title: "Painless Injection",
      description: "Only dental clinic in New York, USA utilising Painless Injection system. You will be amazed!"
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7e830a6729a64d7446569c8cfb4a2e6563a67727ae22f0879206e6d3d8dfb6cd?placeholderIfAbsent=true&apiKey=d08c537fa1474c3f998c9c04b4302930",
      imgAlt: "Dental Implant Icon",
      title: "Dental Implant",
      description: "30+ years of experience in Dental Implant with specialist care. You will be able to chew properly again!"
    }
  ];

  bottomFeatures: FeatureItem[] = [
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/41eb81da88e160919177bec69ae7098cc31b51d25588da96e25cd7855f29efe2?placeholderIfAbsent=true&apiKey=d08c537fa1474c3f998c9c04b4302930",
      imgAlt: "3D Dental Scanner Icon",
      title: "3D Dental Scanner",
      description: "One of the world's most advanced 3D Dental Scanner with auto scanning only one in New York!"
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7500a119708acd5ac87b943fc966f236f9ee3fc4dcca9930d16bd73309b2ddb4?placeholderIfAbsent=true&apiKey=d08c537fa1474c3f998c9c04b4302930",
      imgAlt: "Digital Smile Design Icon",
      title: "Digital Smile Design",
      description: "We help to re-design your smile and shape your teeth to create a customised smile for your face!"
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b1d0dd9cc2da9fa39dd3b3af40e5e9c0d856bdd24b32d043cfc6fc310086a09d?placeholderIfAbsent=true&apiKey=d08c537fa1474c3f998c9c04b4302930",
      imgAlt: "Crown and Bridge Icon",
      title: "Crown and Bridge",
      description: "Transform you blackish gum to pinkish colour with painless, single appointment Laser Gum Treatment"
    }
  ];

  subscriptionForm = new FormGroup({
    firstName: new FormControl(''),
    email: new FormControl(''),
  });

  // appointmentForm = new FormGroup({
  //   fullName: new FormControl(''),
  //   phone: new FormControl(''),
  //   date: new FormControl(''),
  //   doctor: new FormControl(''),
  //   message: new FormControl(''),
  //   privacyPolicy: new FormControl(false),
  // });

  onSubscribeSubmit() {
    if (this.subscriptionForm.valid) {
      console.log(this.subscriptionForm.value);
    }
  }

  onAppointmentSubmit() {
    if (this.appointmentForm.valid) {
      console.log(this.appointmentForm.value);
    }
  }

  appointmentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.appointmentForm = this.fb.group({
      fullName: ['', Validators.required],
      phone: ['', Validators.required],
      date: ['', Validators.required],
      doctor: ['Dr. Pritis Barua', Validators.required],
      message: [''],
      privacyAccepted: [false, Validators.requiredTrue]
    });

    this.subscribeForm = this.fb.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      const formData: AppointmentFormData = this.appointmentForm.value;
      console.log(formData);
    }
  }

  subscribeForm: FormGroup;

  ngOnInit(): void {}

  onSubmity(): void {
    if (this.subscribeForm.valid) {
      const formData: NewsletterFormData = this.subscribeForm.value;
      console.log(formData);
    }
  }

}
