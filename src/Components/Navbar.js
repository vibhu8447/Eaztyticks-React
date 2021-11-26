import React from 'react';
console.log('navBar');

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};
function LabTabs() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   const [Newtext, setNewtext] = React.useState("");
//   const [hexc, sethexc] = React.useState("yellow");
//   const [val, setVal] = React.useState("0");
// //   const [items, setItems] = React.useState(list);
//   function addItems() {
//     let len = items.length;
//     let n = len.toString();
//     // list.push({
//     //   text: Newtext,
//     //   value: n,
//     //   color: hexc
//     // });
//     console.log(items);
//     // setItems(list);
//     setNewtext("");
//     setOpen(false);
//   }
//   const c1 = ["#7B241C", "#17202A", "#E74C3C", "#1ABC9C"],
//     c2 = ["#E59866", "#73C6B6", "#F4D03F", "#1E8449"],
//     c3 = ["#707B7C", "#8E44AD", "#808B96", "#ABEBC6"];

    console.log('navBar return');
  return (
          <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  height: "100%",
                  backgroundColor: "#fff",
                  borderBottom: "1px solid #e5e5e6",
                  height: "48px",
                  maxHeight: "48px",
                  zIndex: 250,
          }}>
            <h1>
              TEsting
          </h1>
          </div>
  )
//     <Box sx={{ width: "100%", typography: "body1" }}>
//       <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//         <div class="tab">
//           {items.map((item) => {
//             if (item.key === 1) {
//               return (
//                 <div
//                   style={{
//                     display: "flex",
//                     flexDirection: "row",
//                     alignItems: "center"
//                   }}
//                 >
//                   <div
//                     style={{
//                       borderRadius: "50%",
//                       height: "6px",
//                       width: "6px",
//                       backgroundColor: item.color
//                     }}
//                   />
//                   {/* <Tabe name={item.text} cl=" active" /> */}
//                 </div>
//               );
//             } else {
//               return (
//                 <div
//                   style={{
//                     display: "flex",
//                     flexDirection: "row",
//                     alignItems: "center"
//                   }}
//                 >
//                   <div
//                     style={{
//                       borderRadius: "50%",
//                       height: "6px",
//                       width: "6px",
//                       backgroundColor: item.color
//                     }}
//                   />
//                   {/* <Tabe name={item.text} cl="" /> */}
//                 </div>
//               );
//             }
//           })}
//           <AddIcon onClick={handleOpen} sx={{ paddingTop: "12px" }} />
//           <Modal
//             open={open}
//             onClose={handleClose}
//             aria-labelledby="modal-modal-title"
//             aria-describedby="modal-modal-description"
//           >
//             <Box sx={style}>
//               <div style={{ margin: "10px 25% 50px 25%" }}>
//                 <input
//                   type="text"
//                   onChange={(e) => setNewtext(e.target.value)}
//                   value={Newtext}
//                 ></input>
//               </div>
//               <hr style={{ marginBottom: "50px" }}></hr>
//               <div style={{ display: "flex", flexDirection: "row" }}>
//                 {c1.map((col) => {
//                   return (
//                     <button
//                       style={{
//                         backgroundColor: col,
//                         width: "70px",
//                         height: "35px",
//                         marginLeft: "10px",
//                         marginRight: "10px",
//                         borderRadius: "4px"
//                       }}
//                       onClick={() => {
//                         console.log("sethexc is running" + hexc);
//                         sethexc(col);
//                         console.log("updated" + hexc);
//                       }}
//                     />
//                   );
//                 })}
//               </div>
//               <br></br>
//               <div style={{ display: "flex", flexDirection: "row" }}>
//                 {c2.map((col) => {
//                   return (
//                     <button
//                       style={{
//                         backgroundColor: col,
//                         width: "70px",
//                         height: "35px",
//                         marginLeft: "10px",
//                         marginRight: "10px",
//                         borderRadius: "4px"
//                       }}
//                       onClick={() => {
//                         console.log("sethexc is running" + hexc);
//                         sethexc(col);
//                         console.log("updated" + hexc);
//                       }}
//                     />
//                   );
//                 })}
//               </div>
//               <br></br>
//               <div style={{ display: "flex", flexDirection: "row" }}>
//                 {c3.map((col) => {
//                   return (
//                     <button
//                       style={{
//                         backgroundColor: col,
//                         width: "70px",
//                         height: "35px",
//                         marginLeft: "10px",
//                         marginRight: "10px",
//                         borderRadius: "4px"
//                       }}
//                       onClick={() => {
//                         console.log("sethexc is running" + hexc);
//                         sethexc(col);
//                         console.log("updated" + hexc);
//                       }}
//                     />
//                   );
//                 })}
//               </div>
//               <div
//                 style={{
//                   height: "10px",
//                   width: "10px",
//                   backgroundColor: hexc
//                 }}
//               />
//               <Button onClick={addItems}> Save </Button>
//             </Box>
//           </Modal>
//         </div>
//       </Box>
//     </Box>
//   );
}


export default LabTabs;