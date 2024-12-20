import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { DentallandingpageService } from './dentallandingpage.service';
import { Patient } from './patient';
import { Appointment } from './appointment';
import { User } from './user';
import { ActivatedRoute, Router } from '@angular/router';
import { timer } from 'rxjs';
import { MessageService } from 'primeng/api';

interface FeatureItem {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
}

interface ServiceStep {
  imageSrc: string;
  imageAlt: string;
  title: string;
}

@Component({
  selector: 'app-dentallandingpage',
  templateUrl: './dentallandingpage.component.html',
  styleUrl: './dentallandingpage.component.css',
})
export class DentallandingpageComponent {
  sForm!: FormGroup;
  pForm!: FormGroup;
  apptForm!: FormGroup;
  patientId:string | any;
  doctors: User[] | undefined;
  currentId!:string;
  isSubmitted = false;
  editMode = false;

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

  serviceSteps: ServiceStep[] = [
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


  constructor(private fb: FormBuilder,
              private landingpageService:DentallandingpageService,
              private messageService: MessageService,
              private router:Router,
              private activatedRoute:ActivatedRoute
            ){
    
   
  }

  ngOnInit(): void {
    this.sForm = this.fb.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.pForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['Female', Validators.required],
      dob: ['', Validators.required],

    });

    this.apptForm = this.fb.group({
      patient: [this.patientId, Validators.required],
      phone: ['', Validators.required],
      date: ['', Validators.required],
      doctor: ['', Validators.required],
      message: [''],
    });

    this._checkEditMode()
    this.getDoctors()
  }

  private _checkEditMode(){
    this.activatedRoute.params.subscribe((params) =>{
      if(params['id']){
        this.editMode = true
        this.currentId = params['id']
        // this.landingpageService.get(this.currentId).subscribe(x =>{
        //     this.xf['name'].setValue(x.name),
        //     this.xf['icon'].setValue(x.icon)
        //     this.xf['color'].setValue(x.color)
        // })
      }
    })
  }


  onSubmit(){
    console.log("submit", this.apptForm.invalid, this.appointmentForm['phone'].value)
    this.isSubmitted = true
    if(this.apptForm.invalid){
      return;
    }
    const appointmentData = {
      id: this.currentId,
      patient: this.appointmentForm['patient'].value,
      phone: this.appointmentForm['phone'].value,
      doctor: this.appointmentForm['doctor'].value,
      message: this.appointmentForm['message'].value,
      date: this.appointmentForm['date'].value,

    }

    const patientData = {
      name: this.appointmentForm['patient'].value,
      address: this.appointmentForm['phone'].value,
      gender: 'Male',
      dob: this.appointmentForm['date'].value,
    }
    if(this.editMode){
      this._updateAppointment(appointmentData)
    }else{
      this.createPatient(patientData).then((patient) => {
        const appt: Appointment = { ...appointmentData, patient: patient.id };
        this._createAppointment(appt);
      });
    }
  }
  
  _createAppointment(appointment:Appointment){
    this.landingpageService.createAppointement(appointment).subscribe(
      appointment =>{
        this.messageService.add({
          severity:'success',
          summary:`Appointemnt  successfully created`,
        })

        timer(3500).toPromise().then(()=>{
          this.router.navigate(['/'])
        })

        // timer(2000).toPromise().then((done)=>{
        //   this.location.back()
        // })

        },error=>{
          console.error("Failed to create Appointment",error)
          this.messageService.add({
            severity:'error',
            summary:'Failed to create Appointment'})
        }
    )
  }

  _updateAppointment(appointment:Appointment){
    this.landingpageService.updateAppointment(this.currentId,appointment).subscribe(appointment=>{
      this.messageService.add({
        severity:'success',
        summary:`Appointment successfully updated`,
        });

    timer(3500).toPromise().then(()=>{
      this.router.navigate(['/'])
    })

    },error=>{
      console.error("Failed to update Appointment",error)
      this.messageService.add({
        severity:'error',
        summary:'Failed to update Appointment'})
    }
    )
  }

  createPatient(patient:Patient): Promise<Patient>{
    return new Promise((resolve, reject) => {
      this.landingpageService.createPatient(patient).subscribe({
        next: (createdPatient) => {
          this.patientId = createdPatient.id;
          resolve(createdPatient); // Resolve the promise with the created patient
        },
        error: (err) => reject(err), // Reject the promise in case of an error
      });
    });
  }

  onSubscribe(){
    console.log("subscribe")
    if (this.sForm.invalid) {
      return;
    }
    this.subscribeForm['firstName'].value
    this.subscribeForm['email'].value
  }

  getDoctors(){
    this.landingpageService.getUsers().subscribe(doctors =>{
      console.log(doctors)
      this.doctors =  doctors
    })
  }

  get patientForm(){
    return this.pForm.controls
  }

  get subscribeForm(){
    return this.sForm.controls
  }

  get appointmentForm(){
    return this.apptForm.controls
  }
}
