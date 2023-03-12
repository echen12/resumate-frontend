import Dropdown from 'react-bootstrap/Dropdown';
import { useTranslation } from 'react-i18next';

function LanguageDropdown() {
  const dropdownColour = {
    background: '#8a8eb3',
    color: ''
  };
    const [t, i18n] = useTranslation('common');

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" style={dropdownColour}>
        {t("Languages")}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => i18n.changeLanguage('pl')}>Polski</Dropdown.Item>
        <Dropdown.Item onClick={() => i18n.changeLanguage('fr')}>Français</Dropdown.Item>
        <Dropdown.Item onClick={() => i18n.changeLanguage('cn')}>中文</Dropdown.Item>
        <Dropdown.Item onClick={() => i18n.changeLanguage('kr')}>한국인</Dropdown.Item>
        <Dropdown.Item onClick={() => i18n.changeLanguage('jp')}>日本語</Dropdown.Item>
        <Dropdown.Item onClick={() => i18n.changeLanguage('hi')}>हिंदी</Dropdown.Item>
        <Dropdown.Item onClick={() => i18n.changeLanguage('en')}>English</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguageDropdown;