const initialState = [
  {
    id: 1,
    username: 'Ngoc bui',
    heading: "Media heading 1",
    content:
      "Media heading 1 Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat."
  },
  {
    id: 2,
    username: 'Doan Son',
    heading: "Media heading 2",
    content:
      "Media heading 2 Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat."
  },
  {
    id: 3,
    username: 'Dinh Quan',
    heading: "Media heading 3",
    content:
      "Media heading 3 Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat."
  }
];


export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}