// // src/components/common/NavLinkItem.js
// "use client"; // Keep this at the very top

// import React, { useState } from "react";

// const NavLinkItem = ({ link }) => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   // Ensure 'children' property exists and is an array for check
//   const hasChildren =
//     link.children && Array.isArray(link.children) && link.children.length > 0;

//   // --- DEFINE EVENT HANDLERS HERE, WITHIN THE COMPONENT'S SCOPE ---

//   const handleToggleDropdown = (e) => {
//     if (hasChildren) {
//       e.preventDefault(); // Prevent default link behavior if it's a parent toggle
//       setIsDropdownOpen(!isDropdownOpen);
//     }
//     // If it doesn't have children, you might want to navigate
//     // but the Link component will handle that naturally.
//     // This function primarily serves dropdown toggling.
//   };

//   const handleMouseEnter = () => {
//     if (hasChildren) {
//       setIsDropdownOpen(true);
//     }
//   };

//   const handleMouseLeave = () => {
//     if (hasChildren) {
//       setIsDropdownOpen(false);
//     }
//   };

//   // --- END OF EVENT HANDLER DEFINITIONS ---

//   return (
//     <li
//       className={`m-nv_li ${hasChildren ? "has-dropdown" : ""} ${
//         isDropdownOpen ? "dd-active" : ""
//       }`}
//       // Now handleMouseEnter and handleMouseLeave are always defined
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <Link
//         className="m-nv_lnk"
//         title={link.name}
//         to={link.path || "#"}
//         onClick={handleToggleDropdown} // This handler is also now always defined
//       >
//         {link.name}
//         {hasChildren && <span className="dropdown-arrow">&#9662;</span>}
//       </Link>

//       {hasChildren && isDropdownOpen && (
//         <div className="dd-nav">
//           <div className="dd-nav_in vjl-md-6">
//             <ul className="dd-nav_ul">
//               {link.children.map((childLink) => (
//                 <li key={childLink.id} className="dd-nav_li">
//                   <Link
//                     className="m-nv_lnk"
//                     title={childLink.name}
//                     to={childLink.path}
//                     onClick={() => setIsDropdownOpen(false)} // This uses an inline function, so it's fine
//                   >
//                     {childLink.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </li>
//   );
// };

// export default NavLinkItem;
