import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import styles from './styleAppLayouts.module.scss';
import FrontPageContainer from '../main/FrontPage/FrontPageContainer'
import PreferencePageContainer from '../main/PreferencePage/PreferencePageContainer';
import DailyPageContainer from '../main/DailyPage/DailyPageContainer';
import MessagePageContainer from '../main/MessagePage/MessagePageContainer';
import StatisticPageContainer from '../main/StatisticPage/StatisticPageContainer';
import AppTitle from './AppTitle';
import AppBottomBar from './AppBottomBar';
import { connect, ConnectedProps } from 'react-redux';
import { AppStateType } from '../../redux/store';
import { setMessages } from '../../redux/appReducer';
import { getIsBadge, getMessagesState } from '../../redux/appStateSelector';
// import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import { Slide } from '@mui/material';

const TabItems =
   [
      < StatisticPageContainer />,
      <MessagePageContainer />,
      <FrontPageContainer />,
      <PreferencePageContainer />,
      <DailyPageContainer />,
   ] as Array<JSX.Element>;

const AppLayouts: React.FC<HeaderProps> = ({ init, isBadge }) => {
   useEffect(() => {

      init();
   }, [])

   const [page, setPage] = useState(2);
   const [oldPage, setOldPage] = useState(2)
   // console.log(oldPage-page)
   return <article className={styles.appWrapper}>
      <AppTitle />
      {/* <Container maxWidth={'md'} disableGutters sx={{ position: 'relative', minHeight: '100vh' }}>
         <Box>
            {TabItems[oldPage]}
         </Box>
      </Container> */}
      <Container maxWidth={'md'} disableGutters sx={{ position: 'relative', minHeight: '100vh' }}>
         <Box>
            <Slide in={page === 0} direction={page>oldPage  ? 'right' : 'left'} unmountOnExit mountOnEnter >
               <Box>
                  < StatisticPageContainer />
               </Box>
            </Slide>
         </Box>
         <Box>
            <Slide in={page === 1} direction={page>oldPage  ? 'right' : 'left'} unmountOnExit mountOnEnter >
               <Box>
                  <MessagePageContainer />
               </Box>
            </Slide>
         </Box>
         <Box>
            <Slide in={page === 2} direction={page>oldPage  ? 'right' : 'left'} unmountOnExit mountOnEnter >
               <Box>
                  <FrontPageContainer />
               </Box>
            </Slide>
         </Box>
         <Box>
            <Slide in={page === 3} direction={page>oldPage  ? 'right' : 'left'} unmountOnExit mountOnEnter >
               <Box>
                  <PreferencePageContainer />
               </Box>
            </Slide>
         </Box>
         <Box>
            <Slide in={page === 4} direction={page>oldPage  ? 'right' : 'left'} unmountOnExit mountOnEnter >
               <Box>
                  <DailyPageContainer />,

               </Box>
            </Slide>
         </Box>
      </Container>
      <AppBottomBar page={page} setPage={setPage} setOldPage={setOldPage} isBadge={isBadge} />
   </article >;
}

const mapStateToProps = (state: AppStateType) => {
   return {
      messages: getMessagesState(state),
      isBadge: getIsBadge(state)
   }
}
const mapDispatchToProps = (dispatch: any) => {
   return {
      init: () => {
         dispatch(setMessages())
      }
   }
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type HeaderProps = ConnectedProps<typeof connector>;
export default connector(AppLayouts);



