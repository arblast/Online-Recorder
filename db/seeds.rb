Category.create!([
  {name: "Meeting"},
  {name: "Music"},
  {name: "Lecture"},
  {name: "Other"}
])
Comment.create!([
  {content: "Hey this is a really good concert! Wish I was there..", author_id: 1, recording_id: 2, parent_id: nil},
  {content: "Hey this is a really good concert! Wish I was there..", author_id: 1, recording_id: 8, parent_id: nil},
  {content: "Interesting lecture, a bit long though", author_id: 1, recording_id: 13, parent_id: nil},
  {content: "Hey this is a really good concert! Wish I was there..", author_id: 3, recording_id: 3, parent_id: nil},
  {content: "Hey this recording has really bad quality", author_id: 3, recording_id: 9, parent_id: nil},
  {content: "Great lecture! Learned a lot!", author_id: 3, recording_id: 11, parent_id: nil},
  {content: "Hey this is a decent concert! ", author_id: 3, recording_id: 1, parent_id: nil},
  {content: "I like this concert too!", author_id: 4, recording_id: 2, parent_id: nil},
  {content: "This was a great concert!", author_id: 4, recording_id: 7, parent_id: nil},
  {content: "Great lecture! A bit long though", author_id: 4, recording_id: 12, parent_id: nil},
  {content: "Great concert!", author_id: 4, recording_id: 1, parent_id: nil}
])
Favorite.create!([
  {user_id: 1, recording_id: 2},
  {user_id: 1, recording_id: 8},
  {user_id: 1, recording_id: 13},
  {user_id: 3, recording_id: 3},
  {user_id: 3, recording_id: 9},
  {user_id: 3, recording_id: 11},
  {user_id: 3, recording_id: 1},
  {user_id: 4, recording_id: 2},
  {user_id: 4, recording_id: 7},
  {user_id: 4, recording_id: 12},
  {user_id: 4, recording_id: 1}
])
Recording.create!([
  {title: "Brandenburg concerto n.2", recording_url: "http://www.scientificinvesting.eu/a/Bach%20-%20Brandenburg%20concerto%20n.2%20BVW%201047%20in%20F%20-%20Allegro-Andante-Allegro%20assai.mp3", image_url: "http://www.naxos.com/sharedfiles/images/artists/orchestra/Boston_Modern_Orchestra_Project.jpg", description: "Brandenburg concerto n.2 BVW 1047 in F by Bach", uploader_id: 2, plays: 0, publicity: "public", category_id: 2},
  {title: "Brandenburg concerto n.3", recording_url: "http://www.scientificinvesting.eu/a/Bach%20-%20Brandenburg%20concerto%20n.3%20BVW%201048%20in%20G%20-%20Allegro-Andante-Allegro.mp3", image_url: "http://www.naxos.com/sharedfiles/images/artists/orchestra/Boston_Modern_Orchestra_Project.jpg", description: "Brandenburg concerto n.3 BVW 1048 in G  by Bach", uploader_id: 3, plays: 0, publicity: "public", category_id: 2},
  {title: "Brandenburg concerto n.4", recording_url: "http://www.scientificinvesting.eu/a/Bach%20-%20Brandenburg%20concerto%20n.4%20BVW%201049%20in%20G%20-%20Allegro-Andante-Presto.mp3", image_url: "http://www.naxos.com/sharedfiles/images/artists/orchestra/Boston_Modern_Orchestra_Project.jpg", description: "Brandenburg concerto n.4 BVW 1049 in G  by Bach", uploader_id: 4, plays: 0, publicity: "public", category_id: 2},
  {title: "Brandenburg concerto n.5", recording_url: "http://www.scientificinvesting.eu/a/Bach%20-%20Brandenburg%20concerto%20n.5%20BVW%201050%20in%20D%20-%20Allegro-Affettuoso-Allegro.mp3", image_url: "http://www.naxos.com/sharedfiles/images/artists/orchestra/Boston_Modern_Orchestra_Project.jpg", description: "Brandenburg concerto n.5 BVW 1050 in D  by Bach", uploader_id: 5, plays: 0, publicity: "public", category_id: 2},
  {title: "Sonata for Violin and Piano 1", recording_url: "http://www.scientificinvesting.eu/a/Beethoven%20-%20Sonata%20for%20violin%20and%20piano%20n.01%20Op.12%20in%20D%20-%201%20Allegro%20con%20brio.mp3", image_url: "http://blair.vanderbilt.edu/images/ensembles/orchestra.JPG", description: "Sonata for violin and piano n.01 Op.12 in D by Beethoven", uploader_id: 1, plays: 0, publicity: "public", category_id: 2},
  {title: "Sonata for Violin and Piano 2", recording_url: "http://www.scientificinvesting.eu/a/Beethoven%20-%20Sonata%20for%20violin%20and%20piano%20n.02%20Op.12%20in%20A%20-%201%20Allegro%20vivace.mp3", image_url: "http://blair.vanderbilt.edu/images/ensembles/orchestra.JPG", description: "Sonata for violin and piano n.02 Op.12 in A by Beethoven", uploader_id: 2, plays: 0, publicity: "public", category_id: 2},
  {title: "Sonata for Violin and Piano 3", recording_url: "http://www.scientificinvesting.eu/a/Beethoven%20-%20Sonata%20for%20violin%20and%20piano%20n.03%20Op.12%20in%20Eb%20-%201%20Allegro%20con%20spirito.mp3", image_url: "http://blair.vanderbilt.edu/images/ensembles/orchestra.JPG", description: "Sonata for violin and piano n.03 Op.12 in Eb by Beethoven", uploader_id: 3, plays: 0, publicity: "public", category_id: 2},
  {title: "Sonata for Violin and Piano 4", recording_url: "http://www.scientificinvesting.eu/a/Beethoven%20-%20Sonata%20for%20violin%20and%20piano%20n.04%20Op.23%20in%20A%20minor%20-%201%20Presto.mp3", image_url: "http://blair.vanderbilt.edu/images/ensembles/orchestra.JPG", description: "Sonata for violin and piano n.04 Op.23 in A minor by Beethoven", uploader_id: 4, plays: 0, publicity: "public", category_id: 2},
  {title: "Sonata for Violin and Piano 5", recording_url: "http://www.scientificinvesting.eu/a/Beethoven%20-%20Sonata%20for%20violin%20and%20piano%20n.06%20Op.30%20n.1%20in%20A%20-%201%20Allegro.mp3", image_url: "http://blair.vanderbilt.edu/images/ensembles/orchestra.JPG", description: "Sonata for violin and piano n.05 Op.24 'Spring' in F  by Beethoven", uploader_id: 5, plays: 0, publicity: "public", category_id: 2},
  {title: "What is knowledge?", recording_url: "http://www.learnoutloud.com/samples/3489/Discovering%20the%20Philosopher%20in%20You.mp3", image_url: "http://trullsenglish.weebly.com/uploads/2/5/1/9/25194894/1190544_orig.jpg", description: "This is the first lecture from the Modern Scholar course Discovering the Philosopher in You taught by Professor Colin McGinn.", uploader_id: 1, plays: 0, publicity: "public", category_id: 3},
  {title: "C.S. Lewis Literature Overview", recording_url: "http://www.learnoutloud.com/samples/30823/Literature%20of%20C.S.%20Lewis%20-%2001.mp3", image_url: "http://trullsenglish.weebly.com/uploads/2/5/1/9/25194894/1190544_orig.jpg", description: "This is the first lecture from the Modern Scholar course Literature of C.S. Lewis taught by Professor Timothy B. Shutt.", uploader_id: 2, plays: 0, publicity: "public", category_id: 3},
  {title: "The Business of America", recording_url: "http://www.learnoutloud.com/samples/3494/Masters%20of%20Enterprise%20-%2001.mp3", image_url: "http://trullsenglish.weebly.com/uploads/2/5/1/9/25194894/1190544_orig.jpg", description: "In this first lecture called The Business of America Professor Brands gives a brief overview of the course and then proceeds to cover 200 years of American business history in 20 minutes from 1776 to the 20th century.", uploader_id: 3, plays: 0, publicity: "public", category_id: 3},
  {title: "Ancient Greek Drama", recording_url: "http://www.learnoutloud.com/samples/30813/Greek%20Drama%20-%2001.mp3", image_url: "http://trullsenglish.weebly.com/uploads/2/5/1/9/25194894/1190544_orig.jpg", description: "This is the first lecture from the Modern Scholar course Greek Drama: Tragedy and Comedy taught by Professor Peter Meineck.", uploader_id: 4, plays: 0, publicity: "public", category_id: 3},
  {title: "Global Warming in Earth's History", recording_url: "http://www.learnoutloud.com/samples/14832/Global%20Warming%20Global%20Threat%2001.mp3", image_url: "http://trullsenglish.weebly.com/uploads/2/5/1/9/25194894/1190544_orig.jpg", description: "This is the first lecture from the Modern Scholar course Global Warming, Global Threat taught by Professor Michael B. McElroy.", uploader_id: 5, plays: 0, publicity: "public", category_id: 3},
  {title: "Democrats DNC Speech", recording_url: "http://www.obamadownloads.com/mp3s/dnc-2004-speech.mp3", image_url: "https://res.cloudinary.com/record-cloud/image/upload/v1478131735/music-note-5_p5oyxj.png", description: "July 27, 2004 Boston, Massachusetts", uploader_id: 1, plays: 0, publicity: "private", category_id: 1},
  {title: "Candidate Announce Speech", recording_url: "http://www.obamadownloads.com/mp3s/candidate-announcement-speech.mp3", image_url: "https://res.cloudinary.com/record-cloud/image/upload/v1478131735/music-note-5_p5oyxj.png", description: "February 10, 2007 Springfield, Illinois", uploader_id: 2, plays: 0, publicity: "private", category_id: 1},
  {title: "Jefferson-Jackson Speech", recording_url: "http://www.obamadownloads.com/mp3s/jefferson-jackson-speech.mp3", image_url: "https://res.cloudinary.com/record-cloud/image/upload/v1478131735/music-note-5_p5oyxj.png", description: "November 10, 2007 Des Moines, Iowa", uploader_id: 3, plays: 0, publicity: "private", category_id: 1},
  {title: "Yes We Can Speech", recording_url: "http://www.obamadownloads.com/mp3s/yes-we-can-speech.mp3", image_url: "https://res.cloudinary.com/record-cloud/image/upload/v1478131735/music-note-5_p5oyxj.png", description: "January 8, 2008 Nashua, New Hampshire", uploader_id: 4, plays: 0, publicity: "private", category_id: 1},
  {title: "Town Hall Speech", recording_url: "http://www.obamadownloads.com/mp3s/townhall-speech.mp3", image_url: "https://res.cloudinary.com/record-cloud/image/upload/v1478131735/music-note-5_p5oyxj.png", description: "March 18, 2008 Philadelphia, Pennsylvania", uploader_id: 5, plays: 0, publicity: "private", category_id: 1},
  {title: "Brandenburg concerto n.1", recording_url: "http://www.scientificinvesting.eu/a/Bach%20-%20Brandenburg%20concerto%20n.1%20BVW%201046%20in%20F%20-%20Allegro-Adagio-Allegro-Menuetto-Polacca.mp3", image_url: "http://www.naxos.com/sharedfiles/images/artists/orchestra/Boston_Modern_Orchestra_Project.jpg", description: "Brandenburg concerto n.1 BVW 1046 in F by Bach", uploader_id: 1, plays: 0, publicity: "public", category_id: 2}
])
User.create!([
  {username: "tiger", email: "tiger@record-cloud.com", password_digest: "$2a$10$KOezoD9JSVM4ucO8OsI.KuliwtLogkzDyQpSU4k2P7Ybc59F2L2xC", session_token: "O83RujcCc8w4mN1i0eMCbg", image_url: "https://res.cloudinary.com/record-cloud/image/upload/v1478905191/ctt8afzurniyjtv9kffv.jpg"},
  {username: "faceless-man", email: "man@record-cloud.com", password_digest: "$2a$10$fWbqII3UGlF7AWxk158w8OPv4.X7v3uNgvYE4.ilkUajre7DSoKnS", session_token: "1hthdN3ojyzKGWnVpID4Dg", image_url: "https://res.cloudinary.com/record-cloud/image/upload/v1478905420/aqrb0lvyuqwxn7hht9tt.png"},
  {username: "guest", email: "guest@email.com", password_digest: "$2a$10$5RryZq32hOKaJo9FqATWXOMt10VolOtazoVqqJIFucr1KlqXcCvbq", session_token: "lKJXVrEpKpbD-QyEI-g3RA", image_url: "https://res.cloudinary.com/record-cloud/image/upload/v1478861955/guest_profile.jpg"},
  {username: "flygon", email: "flygon@record-cloud.com", password_digest: "$2a$10$rltAqwmj.KsNg2nIHouZxuzXYf4A5oiGZAx77PrF07/.8hkLhnPo.", session_token: "Dg1iZJqAvhgn_jbrJJYMZw", image_url: "https://res.cloudinary.com/record-cloud/image/upload/v1478905277/e0rdj4a2cyutzaprzgz2.png"},
  {username: "pikachu", email: "pikachu@record-cloud.com", password_digest: "$2a$10$KtYhyM8lBV4sRt.F8PTMQuCP/rvNDykz/UjIzB11XuNVpm0WKAVj2", session_token: "2podKQIIyQOgQt0_yVBb_w", image_url: "https://res.cloudinary.com/record-cloud/image/upload/v1478905337/uw2kggiqrzuaatny72ws.png"}
])
