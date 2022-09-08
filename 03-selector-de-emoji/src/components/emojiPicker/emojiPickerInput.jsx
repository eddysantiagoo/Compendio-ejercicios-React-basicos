import { useRef } from "react";
import EmojiPicker from "./emojiPicker";
import styles from "./emojiPicker.module.scss"

export default function EmojiPickerInput() {
  const refInput = useRef(null);

  return (
    <div className={styles.input}>
      <input ref={refInput} placeholder="Coloque seu texto" />
      <EmojiPicker ref={refInput} />
    </div>
  );
}
