import HomeIcon from '@material-ui/icons/Home';
import WifiTetheringIcon from '@material-ui/icons/WifiTethering';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PhotoOutlinedIcon from '@material-ui/icons/PhotoOutlined';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';

export const navOptions = [
  { id: 1, title: 'Home', Icon: HomeIcon },
  { id: 2, title: 'Connections', Icon: WifiTetheringIcon },
  { id: 3, title: 'Messages', Icon: ChatIcon },
  { id: 4, title: 'Notifications', Icon: NotificationsIcon },
  {
    id: 5,
    title: 'Me',
    avatar: `${process.env.PUBLIC_URL + '/assets/avatar.jpg'}`,
  },
];

export const postOptions = [
  { id: 1, title: 'Photo', Icon: PhotoOutlinedIcon },
  { id: 2, title: 'Emoji', Icon: EmojiEmotionsOutlinedIcon },
  { id: 3, title: 'Event', Icon: CalendarTodayOutlinedIcon },
  { id: 4, title: 'Location', Icon: LocationOnOutlinedIcon },
];
