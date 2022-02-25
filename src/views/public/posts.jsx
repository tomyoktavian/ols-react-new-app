import React, { useState, useRef, useCallback, useEffect } from 'react';
import { connect } from "react-redux";
import { likePost, unlikePost } from '../../redux/actions';
import InfinitePosts from '../../utils/infinitePost';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const Posts = (props) => {
  const { likePost, postLike, unlikePost} = props;
  const [pageNumber, setPageNumber] = useState(1)
  const { loading, post, hasMore, } = InfinitePosts(pageNumber);
  
  const [dataPostLike, setDataPostLike] = useState([])
  
  useEffect(() => {
    setDataPostLike(postLike)
    console.log(postLike)
  }, [postLike])

  const observer = useRef()
  const lastItemElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])

  const Item = ({post}) => {
    const { title, body } = post

    const handleLike = (id) => {
      likePost(id)
    }

    const handleDisLike = (id) => {
      unlikePost(id)
    }

    return (
      <>
        <ListItemText
          primary={
            <Typography
              sx={{ fontSize: '18px', textTransform: 'capitalize' }}
              component="h2"
              variant="h2"
              color="#000"
            >
              {title}
            </Typography>
          }
          secondary={body}
        />
        <ListItemText>
          {dataPostLike.includes(`${post.id}`) ?
            <IconButton onClick={() => handleDisLike(post.id)}>
              <FavoriteIcon color="error" />
            </IconButton>
            : 
            <IconButton onClick={() => handleLike(post.id)}>
              <FavoriteBorderIcon />
            </IconButton>
          }
        </ListItemText>
      </>
    )
  }


  return (
    <>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {post.map((post, index) => {
          if (post.length === index + 1) {
            return (
              <ListItem ref={lastItemElementRef} key={post.id} alignItems="flex-start">
                <Item post={post} />
              </ListItem>
            )
          } else {
            return (
              <ListItem ref={lastItemElementRef} key={post.id} alignItems="flex-start">
                <Item post={post} />
              </ListItem>
            )
          }
        })}
      </List>
      {loading && (
        <>
          <Stack spacing={1}>
            <Skeleton variant="text" width={210} />
            <Skeleton variant="rectangular" height={50} />
          </Stack>
          <Stack spacing={1} marginTop={3}>
            <Skeleton variant="text" width={210} />
            <Skeleton variant="rectangular" height={50} />
          </Stack>
        </>
      )}
    </>
  )
}

const mapStateToProps = (state) => {
  const { getLikePost: { postLike} } = state
  return {
    postLike
  }
}

export default connect(mapStateToProps, { likePost, unlikePost })(Posts);