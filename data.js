const hospitals = [
  {
    name: "Shree Siddhi Vinayak Multispeciality Hospital",
    address: "Opp. Civil Hospital, Dashpur Kunj Road, Nai Abaadi, Mandsaur, MP 458001",
    phone: "07422-490333",
    type: "Private",
    beds: 50,
    staff: 30,
    image: "https://placehold.co/400x200/1a73e8/white?text=Siddhi+Vinayak+Hospital",
    doctors: [
      { name: "Dr. V.S. Mishra", specialty: "General Medicine" },
      { name: "Dr. Rohit Somani", specialty: "General Physician" },
      { name: "Dr. Santosh Kumar", specialty: "General Surgeon" }
    ],
    lat: 24.0765, lng: 75.0680
  },
  {
    name: "Pamnani Hospital and Research Centre",
    address: "Station Road, Prem Colony, Mandsaur, MP 458001",
    phone: "Not Available",
    type: "Private",
    beds: 40,
    staff: 25,
    image: "https://placehold.co/400x200/0f9d58/white?text=Pamnani+Hospital",
    doctors: [
      { name: "Dr. Ishant Chaurasia", specialty: "Physician" },
      { name: "Dr. Vimal Mehta", specialty: "Eye Specialist" },
      { name: "Dr. Govind Chhaperwal", specialty: "Surgeon" }
    ],
    lat: 24.0780, lng: 75.0700
  },
  {
    name: "Civil Hospital Mandsaur",
    address: "Mhow-Neemuch Road, Nai Abaadi, Mandsaur, MP 458001",
    phone: "108 (Emergency)",
    type: "Government",
    beds: 200,
    staff: 150,
    image: "https://placehold.co/400x200/d93025/white?text=Civil+Hospital",
    doctors: [
      { name: "Dr. A.K. Mishra", specialty: "Medicine Specialist" },
      { name: "Dr. S.S. Verma", specialty: "General Physician" },
      { name: "Dr. Priti Manawat", specialty: "Gynecologist" }
    ],
    lat: 24.0755, lng: 75.0665
  },
  {
    name: "Chelawat Hospital",
    address: "Mhow-Neemuch Road, Nai Abaadi, Mandsaur, MP",
    phone: "Local Directory",
    type: "Private",
    beds: 35,
    staff: 20,
    image: "https://placehold.co/400x200/f4b400/white?text=Chelawat+Hospital",
    doctors: [
      { name: "Dr. Priyank Chelawat", specialty: "Cardiologist" },
      { name: "Dr. Ashok Jain", specialty: "Physician" },
      { name: "Dr. S.K. Mehta", specialty: "Medicine Specialist" }
    ],
    lat: 24.0748, lng: 75.0672
  },
  {
    name: "Mehta Netralaya and Laser Centre",
    address: "Kambal Kendra Road, Nai Abaadi, Mandsaur, MP 458001",
    phone: "07422-403634",
    type: "Private",
    beds: 20,
    staff: 15,
    image: "https://placehold.co/400x200/4285f4/white?text=Mehta+Netralaya",
    doctors: [
      { name: "Dr. Vimal Mehta", specialty: "Eye Specialist (LASIK, Cataract)" },
      { name: "Dr. S.K. Mehta", specialty: "Ophthalmologist" },
      { name: "Dr. Deepak Simlot", specialty: "Eye Surgeon" }
    ],
    lat: 24.0770, lng: 75.0688
  },
  {
    name: "Mewar Orthopedic Hospital",
    address: "Mhow-Neemuch Road, Mandsaur, MP",
    phone: "Not Available",
    type: "Private",
    beds: 30,
    staff: 18,
    image: "https://placehold.co/400x200/ab47bc/white?text=Mewar+Orthopedic",
    doctors: [
      { name: "Dr. Siddharth Patidar", specialty: "Orthopedic" },
      { name: "Dr. Ajay Gulati", specialty: "Joint Specialist" },
      { name: "Dr. Dharmendra Singh", specialty: "Bone Surgeon" }
    ],
    lat: 24.0742, lng: 75.0660
  },
  {
    name: "R K Hospital",
    address: "Mandsaur City, Madhya Pradesh",
    phone: "Not Available",
    type: "Private",
    beds: 25,
    staff: 15,
    image: "https://placehold.co/400x200/00acc1/white?text=RK+Hospital",
    doctors: [
      { name: "Dr. Vijay Nichani", specialty: "Physician" },
      { name: "Dr. Kamal Mandloi", specialty: "General Medicine" },
      { name: "Dr. Rakesh Darbar", specialty: "Surgeon" }
    ],
    lat: 24.0762, lng: 75.0695
  },
  {
    name: "Patidar Orthopaedic and Multispeciality Hospital",
    address: "Station Road, Tirupati Nagar, Mandsaur, MP",
    phone: "Not Available",
    type: "Private",
    beds: 35,
    staff: 20,
    image: "https://placehold.co/400x200/ff7043/white?text=Patidar+Hospital",
    doctors: [
      { name: "Dr. Ajay Patidar", specialty: "Orthopedic" },
      { name: "Dr. Vikram Agrawal", specialty: "Physician" },
      { name: "Dr. Ashok Bhatt", specialty: "Bone Specialist" }
    ],
    lat: 24.0785, lng: 75.0705
  },
  {
    name: "Perfect Eye Hospital",
    address: "Near Dashpur Kunj Road, Nai Abaadi, Mandsaur, MP 458001",
    phone: "07422-404532",
    type: "Private",
    beds: 15,
    staff: 10,
    image: "https://placehold.co/400x200/26a69a/white?text=Perfect+Eye+Hospital",
    doctors: [
      { name: "Dr. S.K. Mehta", specialty: "Eye Specialist" },
      { name: "Dr. Vimal Mehta", specialty: "Eye Surgeon" },
      { name: "Dr. Kamla Jain", specialty: "Eye Care Specialist" }
    ],
    lat: 24.0768, lng: 75.0683
  },
  {
    name: "Anuyog Hospital and Research Centre",
    address: "Mandsaur City, Madhya Pradesh",
    phone: "Not Available",
    type: "Private",
    beds: 30,
    staff: 18,
    image: "https://placehold.co/400x200/8d6e63/white?text=Anuyog+Hospital",
    doctors: [
      { name: "Dr. Ashish Pamecha", specialty: "Physician" },
      { name: "Dr. Raviraj Narwaria", specialty: "Diabetes Specialist" },
      { name: "Dr. Vijay Mishra", specialty: "General Medicine" }
    ],
    lat: 24.0758, lng: 75.0690
  },
  {
    name: "Sunderlal Patwa Govt Medical College & Hospital",
    address: "Mhow-Neemuch Road, Mandsaur, MP 458001",
    phone: "07422-400100",
    type: "Government",
    beds: 500,
    staff: 400,
    image: "https://placehold.co/400x200/c62828/white?text=SP+Medical+College",
    doctors: [
      { name: "Dr. R.K. Jain", specialty: "General Surgery" },
      { name: "Dr. S.P. Sharma", specialty: "Medicine" },
      { name: "Dr. Anjali Verma", specialty: "Obstetrics & Gynaecology" }
    ],
    lat: 24.0735, lng: 75.0655
  },
  {
    name: "Alok Hospital",
    address: "Mandsaur, MP 458001",
    phone: "Not Available",
    type: "Private",
    beds: 30,
    staff: 20,
    image: "https://placehold.co/400x200/1565c0/white?text=Alok+Hospital",
    doctors: [
      { name: "Dr. Alok Sharma", specialty: "General Medicine" },
      { name: "Dr. Neha Gupta", specialty: "Gynaecology" },
      { name: "Dr. Sunil Patel", specialty: "Paediatrics" }
    ],
    lat: 24.0772, lng: 75.0698
  },
  {
    name: "Indira Gandhi Hospital",
    address: "Mandsaur City, MP 458001",
    phone: "Not Available",
    type: "Government",
    beds: 100,
    staff: 80,
    image: "https://placehold.co/400x200/2e7d32/white?text=Indira+Gandhi+Hospital",
    doctors: [
      { name: "Dr. P.K. Singh", specialty: "Medicine" },
      { name: "Dr. Rekha Bai", specialty: "Gynaecology" },
      { name: "Dr. Mohan Lal", specialty: "Surgery" }
    ],
    lat: 24.0750, lng: 75.0675
  },
  {
    name: "Jain Orthopaedic Centre",
    address: "Mandsaur, MP 458001",
    phone: "Not Available",
    type: "Private",
    beds: 25,
    staff: 15,
    image: "https://placehold.co/400x200/6a1b9a/white?text=Jain+Orthopaedic",
    doctors: [
      { name: "Dr. Mahendra Jain", specialty: "Orthopaedics" },
      { name: "Dr. Suresh Jain", specialty: "Bone Specialist" },
      { name: "Dr. Kavita Jain", specialty: "Physiotherapy" }
    ],
    lat: 24.0778, lng: 75.0702
  },
  {
    name: "Pamecha Hospital and Cardiac Centre",
    address: "Mandsaur, MP 458001",
    phone: "Not Available",
    type: "Private",
    beds: 40,
    staff: 25,
    image: "https://placehold.co/400x200/e65100/white?text=Pamecha+Hospital",
    doctors: [
      { name: "Dr. Ashish Pamecha", specialty: "Cardiologist" },
      { name: "Dr. Ravi Pamecha", specialty: "Cardiac Surgeon" },
      { name: "Dr. Sunita Pamecha", specialty: "General Medicine" }
    ],
    lat: 24.0760, lng: 75.0685
  },
  {
    name: "Trimurti Polyclinic and Nursing Home",
    address: "Mandsaur, MP 458001",
    phone: "Not Available",
    type: "Private",
    beds: 20,
    staff: 12,
    image: "https://placehold.co/400x200/00695c/white?text=Trimurti+Polyclinic",
    doctors: [
      { name: "Dr. Rajesh Trivedi", specialty: "General Medicine" },
      { name: "Dr. Suman Trivedi", specialty: "Gynaecology" },
      { name: "Dr. Arun Trivedi", specialty: "Paediatrics" }
    ],
    lat: 24.0763, lng: 75.0692
  },
  {
    name: "ARAS Eye Hospital",
    address: "Mandsaur, MP 458001",
    phone: "Not Available",
    type: "Private",
    beds: 15,
    staff: 10,
    image: "https://placehold.co/400x200/0277bd/white?text=ARAS+Eye+Hospital",
    doctors: [
      { name: "Dr. A.R. Agrawal", specialty: "Eye Specialist" },
      { name: "Dr. S. Agrawal", specialty: "Ophthalmologist" },
      { name: "Dr. Priya Aras", specialty: "Eye Surgeon" }
    ],
    lat: 24.0774, lng: 75.0696
  },
  {
    name: "Central Clinic City Hospital",
    address: "Mandsaur, MP 458002",
    phone: "Not Available",
    type: "Private",
    beds: 30,
    staff: 18,
    image: "https://placehold.co/400x200/558b2f/white?text=Central+Clinic",
    doctors: [
      { name: "Dr. Ramesh Gupta", specialty: "General Medicine" },
      { name: "Dr. Pooja Sharma", specialty: "Dermatology" },
      { name: "Dr. Vikash Tiwari", specialty: "ENT Specialist" }
    ],
    lat: 24.0745, lng: 75.0668
  },
  {
    name: "Aradhya Ayurvedic Hospital",
    address: "Mandsaur, MP 458001",
    phone: "Not Available",
    type: "Private",
    beds: 20,
    staff: 12,
    image: "https://placehold.co/400x200/4e342e/white?text=Aradhya+Ayurvedic",
    doctors: [
      { name: "Dr. Aradhya Sharma", specialty: "Ayurveda" },
      { name: "Dr. Ramkishan Vaidya", specialty: "Panchakarma" },
      { name: "Dr. Geeta Mishra", specialty: "Herbal Medicine" }
    ],
    lat: 24.0756, lng: 75.0678
  },
  {
    name: "District Hospital Mandsaur",
    address: "Kalakhet, Mandsaur, MP 458001",
    phone: "07422-400200",
    type: "Government",
    beds: 300,
    staff: 200,
    image: "https://placehold.co/400x200/37474f/white?text=District+Hospital",
    doctors: [
      { name: "Dr. B.L. Patidar", specialty: "Medicine" },
      { name: "Dr. Meena Chouhan", specialty: "Gynaecology" },
      { name: "Dr. Rajendra Singh", specialty: "Surgery" }
    ],
    lat: 24.0738, lng: 75.0658
  }
];