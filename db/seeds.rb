Category.create!([
  {name: "Meeting"},
  {name: "Music"},
  {name: "Lecture"},
  {name: "Other"}
])

User.create!([
  {username: "tiger", email: "tiger@record-cloud.com", password_digest: "$2a$10$KOezoD9JSVM4ucO8OsI.KuliwtLogkzDyQpSU4k2P7Ybc59F2L2xC", session_token: "O83RujcCc8w4mN1i0eMCbg", image_url: "https://res.cloudinary.com/record-cloud/image/upload/v1478905191/ctt8afzurniyjtv9kffv.jpg"},
  {username: "faceless-man", email: "man@record-cloud.com", password_digest: "$2a$10$fWbqII3UGlF7AWxk158w8OPv4.X7v3uNgvYE4.ilkUajre7DSoKnS", session_token: "1hthdN3ojyzKGWnVpID4Dg", image_url: "https://res.cloudinary.com/record-cloud/image/upload/v1478905420/aqrb0lvyuqwxn7hht9tt.png"},
  {username: "guest", email: "guest@email.com", password_digest: "$2a$10$5RryZq32hOKaJo9FqATWXOMt10VolOtazoVqqJIFucr1KlqXcCvbq", session_token: "lKJXVrEpKpbD-QyEI-g3RA", image_url: "https://res.cloudinary.com/record-cloud/image/upload/v1481700841/guest_profile.png"},
  {username: "cat", email: "cat@record-cloud.com", password_digest: "$2a$10$rltAqwmj.KsNg2nIHouZxuzXYf4A5oiGZAx77PrF07/.8hkLhnPo.", session_token: "Dg1iZJqAvhgn_jbrJJYMZw", image_url: "https://res.cloudinary.com/record-cloud/image/upload/v1481700661/cat.png"},
  {username: "pikachu", email: "pikachu@record-cloud.com", password_digest: "$2a$10$KtYhyM8lBV4sRt.F8PTMQuCP/rvNDykz/UjIzB11XuNVpm0WKAVj2", session_token: "2podKQIIyQOgQt0_yVBb_w", image_url: "https://res.cloudinary.com/record-cloud/image/upload/v1478905337/pikachu.png"}
])

Recording.create!([
  {title:"", recording_url:"", image_url:"", description:"", uploader_id:, publicity:"public", category_id: 1},
  {title:"", recording_url:"", image_url:"", description:"", uploader_id:, publicity:"public", category_id: 1},
  {title:"", recording_url:"", image_url:"", description:"", uploader_id:, publicity:"public", category_id: 1},
  {title:"", recording_url:"", image_url:"", description:"", uploader_id:, publicity:"public", category_id: 1},
  {title:"", recording_url:"", image_url:"", description:"", uploader_id:, publicity:"public", category_id: 1},
  {title:"", recording_url:"", image_url:"", description:"", uploader_id:, publicity:"public", category_id: 1},
  {title:"", recording_url:"", image_url:"", description:"", uploader_id:, publicity:"public", category_id: 1},
  {title:"", recording_url:"", image_url:"", description:"", uploader_id:, publicity:"public", category_id: 1},
  {title:"", recording_url:"", image_url:"", description:"", uploader_id:, publicity:"public", category_id: 1},
  {title:"", recording_url:"", image_url:"", description:"", uploader_id:, publicity:"public", category_id: 1},
  {title:"", recording_url:"", image_url:"", description:"", uploader_id:, publicity:"public", category_id: 2},
  {title:"", recording_url:"", image_url:"", description:"", uploader_id:, publicity:"public", category_id: 2},
  {title:"", recording_url:"", image_url:"", description:"", uploader_id:, publicity:"public", category_id: 2},
  {title:"", recording_url:"", image_url:"", description:"", uploader_id:, publicity:"public", category_id: 2},
  {title:"", recording_url:"", image_url:"", description:"", uploader_id:, publicity:"public", category_id: 2},
  {title:"", recording_url:"", image_url:"", description:"", uploader_id:, publicity:"public", category_id: 2},
  {title:"", recording_url:"", image_url:"", description:"", uploader_id:, publicity:"public", category_id: 2},
  {title:"", recording_url:"", image_url:"", description:"", uploader_id:, publicity:"public", category_id: 2},
  {title:"", recording_url:"", image_url:"", description:"", uploader_id:, publicity:"public", category_id: 2},
  {title:"", recording_url:"", image_url:"", description:"", uploader_id:, publicity:"public", category_id: 2},
  {title:"", recording_url:"", image_url:"", description:"", uploader_id:, publicity:"public", category_id: 3},
  {title:"", recording_url:"", image_url:"", description:"", uploader_id:, publicity:"public", category_id: 3},
  {title:"", recording_url:"", image_url:"", description:"", uploader_id:, publicity:"public", category_id: 3},
  {title:"", recording_url:"", image_url:"", description:"", uploader_id:, publicity:"public", category_id: 3},
  {title:"", recording_url:"", image_url:"", description:"", uploader_id:, publicity:"public", category_id: 3},
  {title:"", recording_url:"", image_url:"", description:"", uploader_id:, publicity:"public", category_id: 3},
  {title:"", recording_url:"", image_url:"", description:"", uploader_id:, publicity:"public", category_id: 3},
  {title:"", recording_url:"", image_url:"", description:"", uploader_id:, publicity:"public", category_id: 3},
  {title:"", recording_url:"", image_url:"", description:"", uploader_id:, publicity:"public", category_id: 3},
  {title:"", recording_url:"", image_url:"", description:"", uploader_id:, publicity:"public", category_id: 3},
  {title:"", recording_url:"", image_url:"", description:"", uploader_id:, publicity:"public", category_id: 3},
  {title:"", recording_url:"", image_url:"", description:"", uploader_id:, publicity:"private", category_id: 4},
  {title:"", recording_url:"", image_url:"", description:"", uploader_id:, publicity:"private", category_id: 4},
  {title:"", recording_url:"", image_url:"", description:"", uploader_id:, publicity:"private", category_id: 4},
  {title:"", recording_url:"", image_url:"", description:"", uploader_id:, publicity:"private", category_id: 4},
  {title:"", recording_url:"", image_url:"", description:"", uploader_id:, publicity:"private", category_id: 4}


  ])
