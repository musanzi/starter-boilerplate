export interface comments {
  img: string;
  name: string;
  designation: string;
  hits: string;
  comments: number;
  desc: string;
  reply: boolean;
}

export const blogData = [
  {
    id: 1,
    img: "assets/images/blog/blog-2.jpg",
    date: "02",
    month: "January",
    year: "January 2023",
    admin: "by: Admin",
    hits: "0",
    details: "Encounter every day.",
    comment: "5",
    title: "",
    details1:
      "A huge part of it is the incomparable beauty you can encounter every day.",
  },
  {
    id: 2,
    img: "assets/images/blog/blog-3.jpg",
    date: "03",
    month: "January",
    year: "January 2023",
    admin: "by: Admin",
    hits: "02",
    details: "White color is important.",
    comment: "5",
    title: "",
    details1:
      "The simplest things are the most profound. People just don't do it anymore.",
  },
  {
    id: 3,
    img: "assets/images/blog/blog-5.jpg",
    date: "9 April 2023",
    admin: "by: Admin",
    hits: "0",
    details: "Encounter every day.",
    comment: "5",
    title: "Black color is important.",
    details1:
      "A huge part of it is the incomparable beauty you can encounter every day.People just anymore profound.",
  },
  {
    id: 4,
    img: "assets/images/blog/blog-6.jpg",
    date: "9 April 2023",
    admin: "by: Admin",
    hits: "0",
    details: "Black color is important ",
    comment: "5",
    title: "Men's Jacket",
    details1:
      "People just don't do it anymore. We have to change that. Sometimes the simplest things are the most profound.",
  },
  {
    id: 5,
    img: "assets/images/blog/blog-5.jpg",
    date: "9 April 2023",
    admin: "by: Admin",
    hits: "0",
    details: "Men's Jacket",
    comment: "5",
    title: "Black color is important.",
    details1:
      "A huge part of it is the incomparable beauty you can encounter every day.People just anymore profound.",
  },
  {
    id: 6,
    img: "assets/images/blog/blog-6.jpg",
    date: "9 April 2023",
    admin: "by: Admin",
    hits: "0",
    details: "Black color is important ",
    comment: "5",
    title: "Men's Jacket",
    details1:
      "People just don't do it anymore. We have to change that. Sometimes the simplest things are the most profound.",
  },
];

export const commentsData: comments[] = [
  {
    img: "assets/images/blog/comment.jpg",
    name: "Jolio Mark",
    designation: "( Designer )",
    hits:'02',
    comments: 598,
    desc: "The best thing is location and drive through the forest. The resort is 35km from Ramnagar. The gardens are well kept and maintained. Its a good place for relaxation away from the city noise. The staff is very friendly and overall we had a really good & fun time, thanks to staff member - Bhairav, Rajat, Gunanand, Lokesh & everyone else. And also we went for an adventurous night safari and saw barking deers, tuskar elephant.",
    reply: false,
  },
  {
    img: "assets/images/blog/9.jpg",
    name: "Mark Jolio",
    designation: "( Designer )",
    hits: '',
    comments: 398,
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    reply: true,
  },
  {
    img: "assets/images/blog/4.jpg",
    name: "Jhon Deo",
    designation: "( Designer )",
    hits: '02',
    comments: 598,
    desc: "From the east coast to the west, each river has its own beauty and character. Each river has its own story. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    reply: false,
  },
  {
    img: "assets/images/blog/12.png",
    name: "Mark Ateer",
    designation: "( Designer )",
    hits: '02',
    comments: 598,
    desc: "Clean resort with maintained garden but rooms are average Lack of communication between the staff members. Receptionsit full of attitude. Arrogant staff. Except good view there is nothing great in this property.Resort is 35 kms away from Ramnagar Town.",
    reply: false,
  },
  {
    img: "assets/images/blog/14.png",
    name: "Greg Arias",
    designation: "( Designer )",
    hits: '02',
    comments: 598,
    desc: "Harpeth rises in the westernmost part of Rutherford County, just to the east of the community of College Grove in eastern Williamson County.but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    reply: false,
  },
];
