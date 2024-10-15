import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="text-center text-3xl font-bold m-12">
        Welcome to IIT Indore!
      </div>
      <table className="table-auto w-full mt-4">
        <thead>
          <tr className="border-b-2 border-black">
            <th className="px-4 py-2">Course Code</th>
            <th className="px-4 py-2">Course Name</th>
            <th className="px-4 py-2">Course Description</th>
            <th className="px-4 py-2">L-P-T</th>
            <th className="px-4 py-2">Course Credits</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2">CS 103</td>
            <td className="px-4 py-2"> Computer Programming</td>
            <td className="px-4 py-2">
              This course provides a comprehensive introduction to computer
              science and programming. Students are taught sequential
              programming in C++.
            </td>
            <td className="px-4 py-2"> 2-0-0</td>
            <td className="px-4 py-2"> 2</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2">CS 153</td>
            <td className="px-4 py-2">Computer Programming Lab</td>
            <td className="px-4 py-2">
              This course covers the practical aspects of the CS 103 course. It
              takes place at the programming lab where students are assisted in
              learning C++ through hands on practice.
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2">CS 201</td>
            <td className="px-4 py-2">Discrete Mathematical Structures</td>
            <td className="px-4 py-2">
              This course is a theoretical course covering the aspects of
              discrete mathematics and the theory of graphs.
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2">CS 202</td>
            <td className="px-4 py-2">Automata Theory and Logic</td>
            <td className="px-4 py-2">
              This course is an introduction to automata theory and logic,
              covering the basics of the theory of finite state machines and the
              theory of regular languages.
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2">CS 203</td>
            <td className="px-4 py-2">Data Structures and Algorithms</td>
            <td className="px-4 py-2">
              This course introduces students to the various Data Structures
              encountered during programming that makes efficient programming
              easier, along with algorithms to build up logical thinking and
              programming concepts.
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2">CS 253</td>
            <td className="px-4 py-2">Data Structures and Algorithms Lab</td>
            <td className="px-4 py-2">
              This course covers the practical aspects of the CS 203 course. It
              takes place at the programming lab where students are assisted in
              heuristical analysis through hands on practice.
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Dashboard;
