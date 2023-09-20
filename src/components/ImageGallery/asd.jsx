// export default class ImageGallery extends Component {
//     state = {
//       images: [],
//       pages: null,
//       page: 1,
//       perPage: 12,
//       isLoading: false,
//       isVisibleModal: false,
//       error: false,
//       status: 'idle',
//     };
  
//     componentDidUpdate = (prevProps, prevState) => {
//       const { perPage } = this.state;
  
//       if (prevProps.searchQuery !== this.props.searchQuery) {
//         this.setState({ isLoading: true, status: 'pending', page: 1 });
  
//         getPixabayPictures(this.props.searchQuery, 1, perPage)
//           .then(({ data, status }) => {
//             if (data.totalHits === 0) {
//               this.setState({ status: 'rejected' });
//               return;
//             }
//             let pages = Math.ceil(data.totalHits / perPage);
  
//             this.setState({
//               images: [...data.hits],
//               pages,
//               isLoading: false,
//               status: 'resolved',
//             });
//           })
//           .catch(error => this.setState({ error, status: 'rejected' }));
//       }
//     };
  
//     handleClick = () => {
//       const { page, perPage } = this.state;
//       const { searchQuery } = this.props;
//       const nextPage = page + 1;
  
//       getPixabayPictures(searchQuery, nextPage, perPage)
//         .then(({ data }) => {
//           this.setState(prevState => ({
//             images: [...prevState.images, ...data.hits],
//             page: nextPage,
//             status: 'resolved',
//           }));
//         })
//         .catch(error => this.setState({ error, status: 'rejected' }));
//     };