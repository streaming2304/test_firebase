const db=firebase.firestore();
const table=document.querySelector('#tbresult');
 
db.collection('user').get().then((snapshot)=>{
        snapshot.forEach(doc=>{
            showData(doc);
        });
});
 
function showData(doc){
    var row=table.insertRow(-1);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    
    cell1.innerHTML=doc.data().name;
    cell2.innerHTML=doc.data().city;
    cell3.innerHTML=doc.data().age;
    
}
