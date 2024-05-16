const fetchProfiles = async () => {
  const response = await fetch('https://mission.insd.dev/api/profiles', {
    headers: {
      Authorization: 'Bearer Wdi4n63eZ2OGLw2RJb9UB42qdu1WUDax',
    },
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

// eslint-disable-next-line import/prefer-default-export
export { fetchProfiles };
