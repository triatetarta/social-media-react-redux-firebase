import HomeIcon from '@material-ui/icons/Home';
import WifiTetheringIcon from '@material-ui/icons/WifiTethering';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PhotoOutlinedIcon from '@material-ui/icons/PhotoOutlined';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

export const navOptions = [
  { id: 1, title: 'Home', Icon: HomeIcon },
  { id: 2, title: 'Connections', Icon: WifiTetheringIcon },
  { id: 3, title: 'Messages', Icon: ChatIcon },
  { id: 4, title: 'Notifications', Icon: NotificationsIcon },
  {
    id: 5,
    title: 'Me',
    avatar: true,
  },
];

export const writeQuarter = [
  { id: 1, title: 'Photo', Icon: PhotoOutlinedIcon },
  { id: 2, title: 'Emoji', Icon: EmojiEmotionsOutlinedIcon },
  { id: 3, title: 'Event', Icon: CalendarTodayOutlinedIcon },
  { id: 4, title: 'Location', Icon: LocationOnOutlinedIcon },
];

export const postOptions = [
  { id: 1, title: 'Like', Icon: ThumbUpAltOutlinedIcon },
  { id: 2, title: 'Comment', Icon: ModeCommentOutlinedIcon },
  { id: 3, title: 'Send', Icon: SendOutlinedIcon },
  { id: 4, title: 'Share', Icon: ShareOutlinedIcon },
];
