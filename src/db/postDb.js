import { firestore } from 'firebase';
function fetchAllPosts() {
 let posts = firestore().collection('post');
 posts.get().then(snapshot => {
     console.log(snapshot)
   snapshot.forEach(doc => {
     console.log(doc.data());
   });
 });
}export default {fetchAllPosts}