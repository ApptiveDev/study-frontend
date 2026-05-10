import './index.css';
import {
  ChatBody,
  ChatFrame,
  ChatHeader,
  ChatBubble,
  ChatInput,
  ChatInfo,
} from './components/chat';

function App() {
  return (
    <ChatFrame>
      <ChatHeader name="APPTIVE 프론트엔드" size={9} />

      <ChatBody>
        <ChatBubble name="세형" text="안녕민석아너를처음본순간부터좋아했어방학전에고백하고싶었는데바보같이그땐용기가없더라지금은이수많은사람들앞에서오로지너만사랑한다고말하고싶어서큰마음먹고용기내어봐매일매일버스에서너볼때마다두근댔고동아리랑과활동에서도너만보이고너생각만나고지난3월부터계속그랬어니가남자친구랑헤어지고니맘이아파울때내마음도너무아팠지만내심좋은맘두있었어이런내맘을어떻게말할지고민하다가정말인생에서제일크게용기내어세상에서제일멋지게많은사람들앞에서너한테고백해주고싶었어사랑하는민석님내여자가되줄래?아니나만의태양이되어줄래?난너의달님이될게내일3시반에너수업마치고학관앞에서기다리고있을게너를사랑하는세형이가" />
        <ChatInfo message="민석님이 퇴장했습니다." />
        <ChatBubble name="호영" text="이제 누가 공지해주냐" />
      </ChatBody>

      <ChatInput />
    </ChatFrame>
  );
}

export default App;
