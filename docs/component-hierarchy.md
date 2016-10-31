## Component Hierarchy

**Header**
  - AuthForm
  - Search
  - Menu

**FavoritesContainer**
  - RecordingIndex

**SearchResultsContainer**
  - RecordingIndex

**MyRecordingsContainer**
  - RecordingIndex

**RecordingDetailContainer**
  - RecordingPlayer
  - RecordingTools
  - RecordingDetails
    + RecordingUploader
    + Details
  - RecordingComments
    + NewCommentForm
    + CommentIndex

**EditRecordingFormContainer**
  - EditRecordingForm
    + SaveChangeButton

**NewRecordingContainer**
  - Recorder
  - NewRecordingForm

**RecordingIndex**
  - RecordingIndexItem
    + FavoriteButton
    + RecordingTitle
    + RecordingCategory
    + RecordingPlayer

## Routes

|Path    |  Component     |
|--------|----------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/favorites" | "FavoritesContainer" |
| "/search-results" | "SearchResultsContainer" |
| "/my-recordings" | "MyRecordingsContainer" |
| "/recordings/:recordingId" | "RecordingDetailContainer" |
| "/new-recording" | "NewRecordingContainer" |
| "/recordings/:recordingId/edit" | "EditRecordingFormContainer" |
