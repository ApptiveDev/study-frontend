// "name": "김지원",
//   "id": "kimjiwon1",
//   "image": "https://mission.insd.dev/images/profiles/uDZ3usCoXB4.jpg",
//   "background": "https://mission.insd.dev/images/backgrounds/6uCy44FbdqM.jpg",
//   "status": "온라인",
//   "job": "프론트엔드 개발자",
//   "bio": "반갑습니다! 웹 개발에 관심이 많은 김지원입니다. 사

export default class ProfileModel {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.image = data.image;
    this.background = data.background;
    this.status = data.status;
    this.job = data.job;
    this.bio = data.bio;
  }
}
