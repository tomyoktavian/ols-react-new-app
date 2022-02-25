import React, { useState, useRef, useCallback } from 'react';
import InfinitePosts from '../../utils/infinitePost';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const Posts = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const { loading, post, hasMore } = InfinitePosts(pageNumber);

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
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
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

export default Posts