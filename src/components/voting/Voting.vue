<template>
    <div id="Voting" class="container bg-dark customRounded mb-2">
        <!--        <button @click="addJsonToStore">add to database</button>-->
        <!--        <button @click="getImageUrl">calllllllll</button>-->
        <div class="row">
            <div id="card" class="col-lg-3 col-md-4 col-sm-5 mt-3   py-2 cards" v-for="(prof,id) in professors"
                 :key="id">
                <div class="card h-100">
                    <div class="card-img-top">
                        <img class="img-fluid img" :src="prof.image" :alt="prof.name">
                    </div>
                    <div class="card-body">
                        <div v-if="id === 0">
                            <font-awesome-icon
                                    icon="star"
                                    class="hover text-center stars"></font-awesome-icon>
                            <font-awesome-icon
                                    icon="star"
                                    class="hover text-center stars"></font-awesome-icon>
                            <font-awesome-icon
                                    icon="star"
                                    class="hover text-center stars"></font-awesome-icon>
                        </div>
                        <div v-if="id === 1">
                            <font-awesome-icon
                                    icon="star"
                                    class="hover text-center stars"></font-awesome-icon>
                            <font-awesome-icon
                                    icon="star"
                                    class="hover text-center stars"></font-awesome-icon>
                        </div>
                        <div v-if="id === 2">
                            <font-awesome-icon
                                    icon="star"
                                    class="hover text-center stars"></font-awesome-icon>
                        </div>

                        <div class="card-text">
                            <p>
                                {{prof.name}}
                            </p>
                            <p>
                                {{prof.position}}
                            </p>
                        </div>

                    </div>
                    <div class="card-footer">
                        <button class="btn bg-success "
                                @click="plusVote(prof)"
                                :disabled="checkStorage(prof) === 1">
                            <font-awesome-icon icon="plus"
                                               class="hover "></font-awesome-icon>
                        </button>
                        {{prof.rate}}
                        <button class="btn bg-danger"
                                :disabled="checkStorage(prof) === 0"
                                @click="minusVote(prof)">
                            <font-awesome-icon icon="minus"
                                               class="hover"></font-awesome-icon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import firebase from 'firebase'
    import db from '../../firebase/init.js'
    import gsap from 'gsap'

    export default {
        name: "Voting",
        data() {
            return {
                voteNum: 0,
                professors: [],
                // professors: [{
                //     "position": "مهندسی کامپیوتر رتبه علمی: استادیار",
                //     "name": "فاطمه جعفری نژاد",
                //     "image": "https://firebasestorage.googleapis.com/v0/b/seclectsec.appspot.com/o/jafar.jpeg?alt=media&token=9bfb2df4-598c-4068-b6b7-da843e8268ba",
                //     "rate": 0,
                //     "id": 1
                // }, {
                //     "position": "هوش مصنوعی رتبه علمی: استادیار",
                //     "image": "https://firebasestorage.googleapis.com/v0/b/seclectsec.appspot.com/o/bigi.jpeg?alt=media&token=ccf86221-724a-4e0a-bb9d-7eea99152388",
                //     "id": 0,
                //     "name": "محسن بیگلری",
                //     "rate": 0
                // }, {
                //     "position": "سيستم های ديجيتال رتبه علمی: استاديار",
                //     "id": 5,
                //     "rate": 0,
                //     "image": "https://firebasestorage.googleapis.com/v0/b/seclectsec.appspot.com/o/fateh.jpeg?alt=media&token=cb9d070f-0b5c-45d2-8167-2e04ce744178",
                //     "name": "منصور فاتح"
                // }, {
                //     "position": "پردازش سيگنال رتبه علمی: استاد",
                //     "rate": 0,
                //     "name": "حمید حسن پور",
                //     "image": "https://firebasestorage.googleapis.com/v0/b/seclectsec.appspot.com/o/hasanpoor.jpeg?alt=media&token=2ca9b0cb-93dd-4f23-bbdf-28427c27cb53",
                //     "id": 2
                // }, {
                //     "image": "https://firebasestorage.googleapis.com/v0/b/seclectsec.appspot.com/o/khodabakhsh.jpeg?alt=media&token=a3efd490-6da2-4d52-a309-6547904c68f9",
                //     "rate": 0,
                //     "position": "نرم‌افزار رتبه علمی: استادیار",
                //     "name": "مریم خدابخش",
                //     "id": 6
                // }, {
                //     "position": "هوش مصنوعی رتبه علمی: استادیار",
                //     "name": "مرضیه رحیمی",
                //     "image": "https://firebasestorage.googleapis.com/v0/b/seclectsec.appspot.com/o/rahimi.jpeg?alt=media&token=613338d7-8858-4083-bd38-20d53f3e1d3b",
                //     "rate": 0,
                //     "id": 3
                // }, {
                //     "position": "هوش مصنوعي و رباتيک رتبه علمی: مربي",
                //     "name": "محسن فرهادی",
                //     "id": 7,
                //     "image": "https://firebasestorage.googleapis.com/v0/b/seclectsec.appspot.com/o/farhadi.jpeg?alt=media&token=53ec0872-3f51-4d68-b798-797cc8c0392f",
                //     "rate": 0
                // }, {
                //     "rate": 0,
                //     "name": "هدی مشایخی",
                //     "id": 9,
                //     "position": "نرم افزار رتبه علمی: استادیار",
                //     "image": "https://firebasestorage.googleapis.com/v0/b/seclectsec.appspot.com/o/mashayekhi.jpeg?alt=media&token=c022bc96-bd0a-438c-b810-2d8b63bafa63"
                // }, {
                //     "rate": 0,
                //     "id": 13,
                //     "image": "https://firebasestorage.googleapis.com/v0/b/seclectsec.appspot.com/o/tahan.jpeg?alt=media&token=ec2b4d7c-ba0a-4a25-9f2d-8d0fef17785d",
                //     "name": "اسماعیل طحانیان",
                //     "position": "مخابرات رتبه علمی: استادیار"
                // }, {
                //     "id": 14,
                //     "image": "https://firebasestorage.googleapis.com/v0/b/seclectsec.appspot.com/o/default.jpg?alt=media&token=e2d032be-893d-42ad-95c5-c93be232e40c",
                //     "rate": 0,
                //     "position": "رتبه علمی: مربی",
                //     "name": "محمد مهدی جلالی"
                // }, {
                //     "name": "مرتضی زاهدی",
                //     "position": "شناسايي الگو رتبه علمی: استاديار",
                //     "rate": 0,
                //     "image": "https://firebasestorage.googleapis.com/v0/b/seclectsec.appspot.com/o/zahedi.jpeg?alt=media&token=10758256-11ae-4ec7-8725-9765e9ed9eef",
                //     "id": 4
                // }, {
                //     "id": 15,
                //     "rate": 0,
                //     "image": "https://firebasestorage.googleapis.com/v0/b/seclectsec.appspot.com/o/default.jpg?alt=media&token=e2d032be-893d-42ad-95c5-c93be232e40c",
                //     "position": "مهندسی نرم افزار رتبه علمی: مربی",
                //     "name": "سید مسلم حسینی"
                // }, {
                //     "rate": 0,
                //     "image": "https://firebasestorage.googleapis.com/v0/b/seclectsec.appspot.com/o/morshed.jpeg?alt=media&token=fb1c4fb8-8856-4c5e-8f34-6417a509769c",
                //     "name": "حسین مرشدلو",
                //     "id": 8,
                //     "position": "نرم افزار- رایانش نرم رتبه علمی: استادیار"
                // }, {
                //     "position": "شبکه و امنیت رتبه علمی: استادیار",
                //     "rate": 0,
                //     "image": "https://firebasestorage.googleapis.com/v0/b/seclectsec.appspot.com/o/rezvani.jpeg?alt=media&token=658b916b-f7fe-437a-bc9c-f59309c5030f",
                //     "name": "محسن رضوانی",
                //     "id": 12
                // }, {
                //     "image": "https://firebasestorage.googleapis.com/v0/b/seclectsec.appspot.com/o/bazghandi.jpeg?alt=media&token=158dc775-1144-49e5-a6c6-291fd5bb938d",
                //     "id": 10,
                //     "position": "نرم افزار رتبه علمی: مربي",
                //     "rate": 0,
                //     "name": "علی بازقندی"
                // }, {
                //     "id": 11,
                //     "position": "شبکه و معماری کامپیوتر رتبه علمی: استادیار",
                //     "name": "علیرضا تجری",
                //     "image": "https://firebasestorage.googleapis.com/v0/b/seclectsec.appspot.com/o/tajar.jpeg?alt=media&token=5d7e913b-3206-45cb-b04c-12d30047b995",
                //     "rate": 0
                // }, {
                //     "position": "رتبه علمی: مربی",
                //     "id": 16,
                //     "name": "سمیرا حورعلی",
                //     "rate": 0,
                //     "image": "https://firebasestorage.googleapis.com/v0/b/seclectsec.appspot.com/o/default.jpg?alt=media&token=e2d032be-893d-42ad-95c5-c93be232e40c"
                // }, {
                //     "name": "رضا رمضانیان",
                //     "rate": 0,
                //     "id": 17,
                //     "image": "https://firebasestorage.googleapis.com/v0/b/seclectsec.appspot.com/o/default.jpg?alt=media&token=e2d032be-893d-42ad-95c5-c93be232e40c",
                //     "position": "رتبه علمی: مربی"
                // }, {
                //     "rate": 0,
                //     "position": "رتبه علمی: مربی",
                //     "id": 18,
                //     "image": "https://firebasestorage.googleapis.com/v0/b/seclectsec.appspot.com/o/default.jpg?alt=media&token=e2d032be-893d-42ad-95c5-c93be232e40c",
                //     "name": "نرجس سرائی"
                // }, {
                //     "id": 19,
                //     "image": "https://firebasestorage.googleapis.com/v0/b/seclectsec.appspot.com/o/default.jpg?alt=media&token=e2d032be-893d-42ad-95c5-c93be232e40c",
                //     "position": "رتبه علمی: مربی",
                //     "name": "علیرضا کریمی",
                //     "rate": 0
                // }, {
                //     "id": 20,
                //     "position": "رتبه علمی: مربی",
                //     "rate": 0,
                //     "name": "خلیل کلایی دارابی",
                //     "image": "https://firebasestorage.googleapis.com/v0/b/seclectsec.appspot.com/o/default.jpg?alt=media&token=e2d032be-893d-42ad-95c5-c93be232e40c"
                // }, {
                //     "name": "زهرا مرتضایی",
                //     "position": "رتبه علمی: مربی",
                //     "rate": 0,
                //     "image": "https://firebasestorage.googleapis.com/v0/b/seclectsec.appspot.com/o/default.jpg?alt=media&token=e2d032be-893d-42ad-95c5-c93be232e40c",
                //     "id": 21
                // }, {
                //     "position": "رتبه علمی: مربی",
                //     "image": "https://firebasestorage.googleapis.com/v0/b/seclectsec.appspot.com/o/default.jpg?alt=media&token=e2d032be-893d-42ad-95c5-c93be232e40c",
                //     "rate": 0,
                //     "name": "زینب مزینانیان",
                //     "id": 22
                // }, {
                //     "position": "رتبه علمی: مربی",
                //     "rate": 0,
                //     "name": "معصومه نظریه",
                //     "id": 23,
                //     "image": "https://firebasestorage.googleapis.com/v0/b/seclectsec.appspot.com/o/default.jpg?alt=media&token=e2d032be-893d-42ad-95c5-c93be232e40c"
                // }],
                image: null,
                count: 1,
                flag: false,
                ip: null
            }
        },
        methods:
            {
                plusVote(prof) {
                    console.log(prof.id.toString())
                    firebase.firestore().collection("professors").doc(prof.id.toString()).update({
                        rate: ++prof.rate
                    }).catch(err => {
                        console.log(err.toString())
                    })
                    localStorage.setItem(prof.name, 1);
                    // window.location.reload()

                }
                ,
                minusVote(prof) {
                    if (prof.ipAdds.length === 0) {
                        prof.ipAdds.push(this.ip)
                        firebase.firestore().collection("professors").doc(prof.id.toString())
                            .update({
                                // rate: ++prof.rate,
                                ipAdds: prof.ipAdds
                            }).catch(err => {
                            console.log(err.toString())
                        })
                        localStorage.setItem(prof.name, 0);
                        // console.log("first if")
                    } else {
                        // console.log("first else")
                        const found = prof.ipAdds.some(el => el === this.ip);
                        if (found) {
                            this.feedback = "شما رای داده اید"
                            console.log(this.feedback)
                        } else {
                            // console.log("second else")
                            prof.ipAdds.push(this.ip)
                            firebase.firestore().collection("professors").doc(prof.id.toString())
                                .update({
                                    // rate: ++prof.rate,
                                    ipAdds: prof.ipAdds
                                }).catch(err => {
                                console.log(err.toString())
                            })
                            localStorage.setItem(prof.name, 0);
                        }
                    }
                    // window.location.reload();
                }
                ,
                checkStorage(prof) {
                    return Number(localStorage.getItem(prof.name));
                }
                ,

                // addJsonToStore() {
                //     this.professors.forEach((prof) => {
                //         firebase.firestore().collection("professors").doc(prof.id.toString()).set({
                //             id: prof.id,
                //             name: prof.name,
                //             position: prof.position,
                //             image: prof.image,
                //             rate: 0
                //         })
                //     })
                // }
                // ,
                // getImageUrl(prof) {
                //     // console.log(prof)
                //     firebase.storage().ref().child(prof.image).getDownloadURL().then((url) => {
                //         // console.log(url)
                //         prof.image = url
                //         // console.log(prof)
                //         this.professors.push(prof)
                //         console.log(this.professors)
                //     }).catch(err => {
                //         console.log(err)
                //     })
                // }
            }
        ,
        created() {

            fetch('https://api.ipify.org?format=json')
                .then(x => x.json())
                .then(({ip}) => {
                    this.ip = ip;
                })

            firebase.firestore().collection("professors").orderBy("rate", "desc")
                .get().then((snapshot) => {
                snapshot.forEach((doc) => {
                    // console.log(doc.data())
                    // this.getImageUrl(doc.data())
                    // console.log(doc.data())
                    this.professors.push(doc.data())
                })
            }).then(() => {
                gsap.from('.card', {
                    duration: 0.5,
                    opacity: 0,
                    scale: 0,
                    y: 300,
                    ease: 'power1',
                    stagger: {
                        from: 'start',
                        each: 0.2,
                    }
                })
            })
            // console.log(this.professors)
            // this.professors.forEach((prof) => {
            //     console.log(prof.image)
            //     // firebase.storage().ref().child(prof.image).getDownloadURL().then((url) => {
            //     //     console.log(url)
            //     //     prof.image = url
            //     // }).catch(err => {
            //     //     console.log(err)
            //     // })
            // })
        },
    }
</script>

<style scoped>
    .stars {
        color: gold;
    }

    .customRounded {
        border-bottom-left-radius: 0.25rem !important;
        border-bottom-right-radius: 0.25rem !important;
    }

    .hover {
        cursor: pointer;
    }

    .img {
        height: 170px !important;
    }
</style>